import { ChainId, Currency, currencyEquals, JSBI, Price } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import tokens, { mainnetTokens } from 'config/constants/tokens'
import { PairState, usePairs } from './usePairs'
import { wrappedCurrency } from '../utils/wrappedCurrency'

const DUSD_MAINNET = mainnetTokens.busd
const { wbnb: WALV } = tokens

/**
 * Returns the price in DUSD of the input currency
 * @param currency currency to compute the DUSD price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WALV, wrapped) ? undefined : currency, chainId ? WALV : undefined],
      [wrapped?.equals(DUSD_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? DUSD_MAINNET : undefined],
      [chainId ? WALV : undefined, chainId === ChainId.MAINNET ? DUSD_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )
  const [[ethPairState, ethPair], [busdPairState, busdPair], [busdEthPairState, busdEthPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WALV)) {
      if (busdPair) {
        const price = busdPair.priceOf(WALV)
        return new Price(currency, DUSD_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle busd
    if (wrapped.equals(DUSD_MAINNET)) {
      return new Price(DUSD_MAINNET, DUSD_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WALV)
    const ethPairETHDUSDValue: JSBI =
      ethPairETHAmount && busdEthPair ? busdEthPair.priceOf(WALV).quote(ethPairETHAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the busd pair
    if (
      busdPairState === PairState.EXISTS &&
      busdPair &&
      busdPair.reserveOf(DUSD_MAINNET).greaterThan(ethPairETHDUSDValue)
    ) {
      const price = busdPair.priceOf(wrapped)
      return new Price(currency, DUSD_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && busdEthPairState === PairState.EXISTS && busdEthPair) {
      if (busdEthPair.reserveOf(DUSD_MAINNET).greaterThan('0') && ethPair.reserveOf(WALV).greaterThan('0')) {
        const ethBusdPrice = busdEthPair.priceOf(DUSD_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WALV)
        const busdPrice = ethBusdPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, DUSD_MAINNET, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, busdEthPair, busdEthPairState, busdPair, busdPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.cake)
  return cakeBusdPrice
}

export const useBNBBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wbnb)
  return bnbBusdPrice
}
