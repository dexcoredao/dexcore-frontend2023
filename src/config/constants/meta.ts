import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Elves DEX',
  description:
    'The most popular AMM on BSC by user count! Earn ELVES through yield farming or win it in the Lottery, then stake it in ELVES Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Elves DEX), NFTs, and more, on a platform you can trust.',
  image: 'https://elvesdex.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Elves DEX')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Elves DEX')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Elves DEX')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Elves DEX')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Elves DEX')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Elves DEX')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Elves DEX')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Elves DEX')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Elves DEX')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Elves DEX')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Elves DEX')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Elves DEX')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Elves DEX')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Elves DEX')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Elves DEX')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Elves DEX')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Elves DEX')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Elves DEX')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Elves DEX Info & Analytics')}`,
        description: 'View statistics for Elves DEX exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Elves DEX Info & Analytics')}`,
        description: 'View statistics for Elves DEX exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Elves DEX Info & Analytics')}`,
        description: 'View statistics for Elves DEX exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Elves DEX')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Elves DEX')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Elves DEX')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Elves DEX')}`,
      }
    default:
      return null
  }
}
