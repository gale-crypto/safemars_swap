import { egoldChainTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

export const DEP_XAU_LP = '0x4B3E4789d9a45839cBd0668441b0B91E0720D2cC'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */

  {
    pid: 0,
    lpSymbol: 'DEP',
    lpAddress: "0xB99FB43a5328E862ab31C28Cf55a7349981c813e",
    token: egoldChainTokens.dep,
    quoteToken: egoldChainTokens.usdt,
    isTokenOnly: true,
  },
  {
    pid: 1,
    lpSymbol: 'DEP-USDT LP',
    lpAddress: '0xB99FB43a5328E862ab31C28Cf55a7349981c813e',
    token: egoldChainTokens.dep,
    quoteToken: egoldChainTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'DEP-XAU LP',
    lpAddress: DEP_XAU_LP,
    token: egoldChainTokens.dep,
    quoteToken: egoldChainTokens.wxau,
  },
  {
    pid: 3,
    lpSymbol: 'USDT-XAU LP',
    lpAddress: '0xdA39413bEE9EBCB875313e38861EB5b878eADbE7',
    token: egoldChainTokens.usdt,
    quoteToken: egoldChainTokens.wxau,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
