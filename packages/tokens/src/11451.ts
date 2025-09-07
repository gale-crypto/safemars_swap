import { ChainId, Token, WBNB } from '@pancakeswap/sdk'

export const egoldChainTokens = {
  wxau: WBNB[ChainId.EGOLD],
  dep: new Token(
    ChainId.EGOLD,
    '0x03cF012A580117d40a748d84aDa53758A45a5033',
    18,
    'DEP',
    'Safemars',
    'https://www.defipower.com',
  ),
  usdt: new Token(
    ChainId.EGOLD,
    '0xB98D93Cf74c24aB2814B56e4FcFcb9dBCC978929',
    18,
    'USDT',
    'Tether USD',
  ),
}
