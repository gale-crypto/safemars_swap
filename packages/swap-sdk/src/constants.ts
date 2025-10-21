import JSBI from 'jsbi'
import { Token } from './entities/token'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  ETHEREUM = 1,
  RINKEBY = 4,
  GOERLI = 5,
  BSC = 56,
  BSC_TESTNET = 97,
  PULSE_CHAIN = 369,
  EGOLD = 11451,
  SOMNIA = 5031,
  ARBITRUM = 42161,
  POLYGON = 137,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
export const FACTORY_ADDRESS_EGOLD = '0x353F34F703c072090390452424Bee67E8992C536'
export const FACTORY_ADDRESS_SOMNIA = '0x8070712306D1D4196572f32dF9d67344D833EaD3'
const FACTORY_ADDRESS_ETH = '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362'
const FACTORY_ADDRESS_ARBITRUM = '0x02a84c1b3BBD7401a5f7fa98a384EBC70bB5749E'
const FACTORY_ADDRESS_POLYGON = '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C'

export const INIT_CODE_HASH_EGOLD = '0xb554915b49140e30b3b89dcba86bbfa31ca3d16da970f532bbf7e7b7e72ab6f0'
export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
const INIT_CODE_HASH_ETH = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
const INIT_CODE_HASH_ARBITRUM = '0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d'
const INIT_CODE_HASH_POLYGON = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
export const INIT_CODE_HASH_SOMNIA = '0x77a888cf1d93ed21e0f6d5cbe202f6f2058ccecb4bfc02cec087c6da8212ba16'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.EGOLD]: FACTORY_ADDRESS_EGOLD,
  [ChainId.SOMNIA]: FACTORY_ADDRESS_SOMNIA,
  [ChainId.ARBITRUM]: FACTORY_ADDRESS_ARBITRUM,
  [ChainId.ETHEREUM]: FACTORY_ADDRESS_ETH,
  [ChainId.RINKEBY]: FACTORY_ADDRESS_ETH,
  [ChainId.GOERLI]: FACTORY_ADDRESS_ETH,
  [ChainId.BSC]: FACTORY_ADDRESS,
  [ChainId.POLYGON]: FACTORY_ADDRESS_POLYGON,
  [ChainId.BSC_TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.PULSE_CHAIN]: '0x1715a3E4A142d8b698131108995174F37aEBA10D',
}
export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.EGOLD]: INIT_CODE_HASH_EGOLD,
  [ChainId.SOMNIA]: INIT_CODE_HASH_SOMNIA,
  [ChainId.ARBITRUM]: INIT_CODE_HASH_ARBITRUM,
  [ChainId.ETHEREUM]: INIT_CODE_HASH_ETH,
  [ChainId.RINKEBY]: INIT_CODE_HASH_ETH,
  [ChainId.GOERLI]: INIT_CODE_HASH_ETH,
  [ChainId.BSC]: INIT_CODE_HASH,
  [ChainId.POLYGON]: INIT_CODE_HASH_POLYGON,
  [ChainId.BSC_TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.PULSE_CHAIN]: '0x59fffffddd756cba9095128e53f3291a6ba38b21e3df744936e7289326555d62',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WETH9 = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
  [ChainId.SOMNIA]: new Token(
    ChainId.SOMNIA,
    '0x936Ab8C674bcb567CD5dEB85D8A216494704E9D8',
    18,
    'WETH',
    'Wrapped Ether',
    'https://weth.io'
  ),
}

export const WBNB = {
  [ChainId.ETHEREUM]: new Token(
    ChainId.ETHEREUM,
    '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.PULSE_CHAIN]: new Token(
    ChainId.PULSE_CHAIN,
    '0xA1077a294dDE1B09bB078844df40758a5D0f9a27',
    18,
    'WPLS',
    'Wrapped PLS',
    'https://www.pulsescan.com'
  ),
  [ChainId.EGOLD]: new Token(
    ChainId.EGOLD,
    '0xE81Ca6eB09BD7D28EBC6362cD531D44528DCbf0D',
    18,
    'WXAU',
    'Wrapped XAU',
    'https://www.defipower.com'
  ),
  [ChainId.SOMNIA]: new Token(
    ChainId.SOMNIA,
    '0x046EDe9564A72571df6F5e44d0405360c0f4dCab',
    18,
    'WSOMI',
    'Wrapped SOMI',
    'https://explorer.somnia.network'
  ),  
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'Wrapped Ether',
    'https://www.arbiscan.io'
  ),
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    18,
    'WMATIC',
    'Wrapped Matic',
    'https://polygonscan.com'
  ),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
  [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.PULSE_CHAIN]: WBNB[ChainId.PULSE_CHAIN],
  [ChainId.EGOLD]: WBNB[ChainId.EGOLD],
  [ChainId.SOMNIA]: WBNB[ChainId.SOMNIA],
  [ChainId.ARBITRUM]: WBNB[ChainId.ARBITRUM],
  [ChainId.POLYGON]: WBNB[ChainId.POLYGON],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.RINKEBY]: { name: 'Rinkeby Ether', symbol: 'RIN', decimals: 18 },
  [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
  [ChainId.PULSE_CHAIN]: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
  [ChainId.EGOLD]: { name: 'XAU', symbol: 'XAU', decimals: 18 },
  [ChainId.SOMNIA]: { name: 'SOMI', symbol: 'SOMI', decimals: 18 },
  [ChainId.POLYGON]: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
  [ChainId.ARBITRUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
    decimals: 18,
  },
}
