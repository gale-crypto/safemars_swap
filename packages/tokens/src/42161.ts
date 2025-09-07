import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

export const arbitrumChainTokens = {
  wbnb: WBNB[ChainId.ARBITRUM],
  usdt: new Token(
    ChainId.ARBITRUM,
    '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    6,
    'USDT',
    'Tether USD',
  ),
  usdc: new Token(
    ChainId.ARBITRUM,
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    6,
    'USDC',
    'USD Coin',
  ),
}
