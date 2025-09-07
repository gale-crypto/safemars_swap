import React from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import Hero from './components/Hero'
import TotalReferral from './components/TotalReferral'
import ReferralDetails from './components/ReferralDetails'
import ReferralCommission from './components/ReferralCommission'
import ReferralLink from './components/ReferralLink'
import UnlockWalletCard from './components/UnlockWalletCard'
import { BaseLayout } from '@pancakeswap/uikit'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 4;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referral: React.FC = () => {
  const { account } = useActiveWeb3React()

  return (
    <div 
    // style={{background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"}}
    >
      <Hero />
      <Page>
        {!account ? (
          <UnlockWalletCard />
          ) : (
            <>
            <Cards>              
              <ReferralDetails />
              <div>
              <TotalReferral />
              <ReferralCommission />
              </div>
            </Cards>
            <ReferralLink />
          </>
        )}
      </Page>
    </div>
  )
}

export default Referral
