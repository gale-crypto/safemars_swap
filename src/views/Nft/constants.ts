import { pulseChainTokens } from '@pancakeswap/tokens'
import { SerializedNftConfig } from '@pancakeswap/farms'

const nfts: SerializedNftConfig[] = [  
  {
    tokenId: 0,
    name: 'Safemars NFT',
    symbol: 'Safemars',
    nftPrice: 150,
    nftImage: '/images/nfts/3.png',
    dailyApr: 30,
    ROI: 333,
    maxApr: 20000
  },
  {
    tokenId: 1,
    name: 'DefiPowerist NFT',
    symbol: 'DefiPowerist',
    nftPrice: 750,
    nftImage: '/images/nfts/1.png',
    dailyApr: 100,
    ROI: 100,
    maxApr: 20000
  },
  {
    tokenId: 2,
    name: 'DefiPowerator NFT',
    symbol: 'DefiPowerator',
    nftPrice: 1000,
    nftImage: '/images/nfts/2.png',
    dailyApr: 250,
    ROI: 40,
    maxApr: 20000
  },
]

export default nfts
