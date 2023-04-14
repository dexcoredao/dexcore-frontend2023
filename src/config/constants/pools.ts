import { serializeTokens } from './tokens'
import {
  PoolCategory,
  SerializedPoolConfig,
} from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      3797: '0x575476BFf2bECF77D2052789FE528ae2730332d5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.002',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
