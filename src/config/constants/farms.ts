import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'ELVES',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      3797: '0x79499BbEA6DeAa580ABBEB6A902f7C3045495967',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
    
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'ELVES-ALV LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      3797: '0x7FAf0ce59eD8bF87eD19CBeE59318bd3Ca55F7FA',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
    
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'DUSD-ALV LP',
    lpAddresses: {
      97: '',
      3797: '0xA3aB4B8aE30e749A9cd7aB530f6C27d39b5BB967',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
    
  }
  
]

export default farms
