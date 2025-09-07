import { ChainId, Token, WBNB, WETH9 } from '@pancakeswap/sdk'

export const somniaChainTokens = {
  wsomi: WBNB[ChainId.SOMNIA],
  usdc: new Token(
    ChainId.SOMNIA,
    '0x28BEc7E30E6faee657a03e19Bf1128AaD7632A00',
    18,
    'USDC',
    'Bridged USDC',
    'https://www.defipower.com',
  ),
  usdt: new Token(
    ChainId.SOMNIA,
    '0x67B302E35Aef5EEE8c32D934F5856869EF428330',
    18,
    'USDT',
    'Tether USD',
  ),
  weth: WETH9[ChainId.SOMNIA]
}
