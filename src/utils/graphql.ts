import { BIT_QUERY, INFO_CLIENT, STABLESWAP_SUBGRAPH_CLIENT } from 'config/constants/endpoints'
import { GraphQLClient } from 'graphql-request'

// Extra headers
// Mostly for dev environment
// No production env check since production preview might also need them
export const getGQLHeaders = (endpoint: string) => {
  if (endpoint === INFO_CLIENT) {
    return {
      origin:
        process.env.NEXT_PUBLIC_NODE_REAL_HEADER ||
        // hack for inject CI secret on window
        (typeof window !== 'undefined' &&
          // @ts-ignore
          window.nrHeader),
    }
  }
  return undefined
}

export const infoClient = new GraphQLClient(INFO_CLIENT)

export const infoServerClient = new GraphQLClient(INFO_CLIENT, {
  headers: {
    'X-Sf': process.env.SF_HEADER,
  },
  timeout: 5000,
})

export const stableSwapClient = new GraphQLClient(STABLESWAP_SUBGRAPH_CLIENT, {
  headers: getGQLHeaders(STABLESWAP_SUBGRAPH_CLIENT),
})

export const bitQueryServerClient = new GraphQLClient(BIT_QUERY, {
  headers: {
    // only server, no `NEXT_PUBLIC` not going to expose in client
    'X-API-KEY': process.env.BIT_QUERY_HEADER,
  },
  timeout: 5000,
})
