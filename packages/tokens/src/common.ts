import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://defipower.com/',
)

export const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://defipower.com/',
)
export const CAKE_PULSE = new Token(
  ChainId.PULSE_CHAIN,
  '0x24BC7AeDCC69813B5876934314D708D4254652ab',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://defipower.com/',
)
export const CAKE_EGOLD = new Token(
  ChainId.EGOLD,
  '0x046EDe9564A72571df6F5e44d0405360c0f4dCab',
  18,
  'WSOMI',
  'WSOMI',
  'https://defipower.com/',
)

export const CAKE_SOMNIA = new Token(
  ChainId.SOMNIA,
  '0x03cF012A580117d40a748d84aDa53758A45a5033',
  18,
  'WSOMI',
  'WSOMI',
  'https://defipower.com/',
)

export const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')

export const USDC_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDC_ARBITRUM = new Token(
  ChainId.ARBITRUM,
  '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_POLYGON = new Token(
  ChainId.POLYGON,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  6,
  'USDC',
  'USD Coin',
)

export const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_EGOLD = new Token(
  ChainId.EGOLD,
  '0xB98D93Cf74c24aB2814B56e4FcFcb9dBCC978929',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_SOMNIA = new Token(
  ChainId.SOMNIA,
  '0x67B302E35Aef5EEE8c32D934F5856869EF428330',
  18,
  'USDT',
  'Bridged stgUSDT',
  'https://tether.to/',
)

export const USDC_SOMNIA = new Token(
  ChainId.SOMNIA,
  '0x28bec7e30e6faee657a03e19bf1128aad7632a00',
  18,
  'USDC',
  'Bridged USDC',
  'https://tether.to/',
)

export const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.PULSE_CHAIN]: undefined,
  [ChainId.EGOLD]: undefined,
  [ChainId.SOMNIA]: undefined,
  [ChainId.ARBITRUM]: undefined,
  [ChainId.POLYGON]: undefined
}

export const CAKE = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.PULSE_CHAIN]: CAKE_PULSE,
  [ChainId.EGOLD]: CAKE_EGOLD,
  [ChainId.SOMNIA]: CAKE_SOMNIA
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.ARBITRUM]: USDC_ARBITRUM,
  [ChainId.POLYGON]: USDC_POLYGON,
  [ChainId.SOMNIA]: USDC_SOMNIA
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.EGOLD]: USDT_EGOLD,
  [ChainId.SOMNIA]: USDT_SOMNIA
}

export const WBTC_ETH = new Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)
