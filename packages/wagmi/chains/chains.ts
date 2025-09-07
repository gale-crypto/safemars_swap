import { Chain } from 'wagmi'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc.publicnode.com',
    default: 'https://bsc.publicnode.com',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

// export const bscTest: Chain = {
//   id: 97,
//   name: 'BNB Smart Chain Testnet',
//   network: 'bsc-testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Binance Chain Native Token',
//     symbol: 'tBNB',
//   },
//   rpcUrls: {
//     public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
//     default: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
//   },
//   blockExplorers: {
//     default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
//   },
//   multicall: {
//     address: '0xcA11bde05977b3631167028862bE2a173976CA11',
//     blockCreated: 17422483,
//   },
//   testnet: true,
// }

export const pulsechain: Chain = {
  id: 369,
  name: 'Pulse chain',
  network: 'pulse-chain',
  nativeCurrency: {
    decimals: 18,
    name: 'Pulse Chain Native Token',
    symbol: 'PLS',
  },
  rpcUrls: {
    public: 'https://rpc.pulsechain.com',
    default: 'https://rpc.pulsechain.com',
  },
  blockExplorers: {
    default: { name: 'PulseScan', url: 'https://scan.pulsechain.com' },
  },
  multicall: {
    address: '0xdc6ed7C2EE5ab7fd303334B34F7524Cbb463DE57',
    blockCreated: 18432843,
  },
  testnet: true,
}

const egoldExplorer = { name: 'eGoldScan', url: 'https://egoldscan.io' }
const somniaExplorer = { name: 'Somnia Scan', url: 'https://explorer.somnia.network' }

export const egold: Chain = {
  id: 11451,
  name: 'eGold Chain',
  network: 'egold',
  rpcUrls: {
    default: 'https://rpc.egoldchain.com',
    public: 'https://rpc.egoldchain.com',
  },
  blockExplorers: {
    default: egoldExplorer,
    etherscan: egoldExplorer,
  },
  multicall: {
    address: '0xc9D97730c2d8CAFFce1c1E1A213c100B2a50Bd1E',
    blockCreated: 7162653,
  },
  nativeCurrency: {
    name: 'xau',
    symbol: 'XAU',
    decimals: 18,
  },
}

export const somnia: Chain = {
  id: 5031,
  name: 'Somnia Mainnet',
  network: 'Somnia',
  rpcUrls: {
    default: 'https://api.infra.mainnet.somnia.network',
    public: 'https://api.infra.mainnet.somnia.network',
  },
  blockExplorers: {
    default: somniaExplorer,
    etherscan: somniaExplorer,
  },
  multicall: {
    address: '0x5e44F178E8cF9B2F5409B6f18ce936aB817C5a11',
    blockCreated: 38516341,
  },
  nativeCurrency: {
    name: 'SOMI',
    symbol: 'SOMI',
    decimals: 18,
  },
}

const mainnetExplorer = { name: "mainnet", url: "https://etherscan.io"}

export const mainnet: Chain = {
  id: 1,
  name: 'Ethereum Mainnet',
  network: 'eth',
  rpcUrls: {
    public: 'https://eth.llamarpc.com',
    default: 'https://eth.drpc.org',
  },
  blockExplorers: {
    default: mainnetExplorer,
    etherscan: mainnetExplorer,
  },
  nativeCurrency: {
    name: 'Ethereum Native Token',
    symbol: 'ETH',
    decimals: 18,
  },
  multicall: {
    address: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    blockCreated: 20860364,
  },
}
const arbExplorer = { name: "arb", url: "https://arbiscan.io"}

export const arbitrum: Chain = {
  id: 42161,
  name: 'Arbitrum One',
  network: 'arbi',
  rpcUrls: {
    public: 'https://arbitrum.llamarpc.com',
    default: 'https://1rpc.io/arb',
  },
  blockExplorers: {
    default: arbExplorer,
    etherscan: arbExplorer,
  },
  nativeCurrency: {
    name: 'Arbitrum Native Token',
    symbol: 'ETH',
    decimals: 18,
  },
  multicall: {
    address: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
    blockCreated: 15921452,
  },
}

const polygonExplorer = { name: "polygon", url: "https://polygonscan.com"}

export const polygon: Chain = {
  id: 137,
  name: 'Polygon Mainnet',
  network: 'polygon',
  rpcUrls: {
    public: 'https://polygon.drpc.org',
    default: 'https://polygon-bor-rpc.publicnode.com',
  },
  blockExplorers: {
    default: polygonExplorer,
    etherscan: polygonExplorer,
  },
  nativeCurrency: {
    name: 'Polygon Native Token',
    symbol: 'POL',
    decimals: 18,
  },
  multicall: {
    address: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
    blockCreated: 53758896,
  },
}