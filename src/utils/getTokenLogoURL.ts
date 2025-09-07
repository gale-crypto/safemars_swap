import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.PULSE_CHAIN]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  // [ChainId.EGOLD]: 'egold',
  [ChainId.SOMNIA]: 'somnia',
  [ChainId.ARBITRUM]: 'arbitrum',
  [ChainId.BSC]: 'bsc',
  [ChainId.POLYGON]: 'polygon',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    return `/images/tokens/${token.address}.png`
    // return `images/${mapping[token.chainId]}/assets/${token.address}/safemars.png`
  }
  return null
}

export default getTokenLogoURL
