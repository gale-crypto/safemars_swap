import React from 'react'
import styled from 'styled-components'
import useTotalRefCommission, { useTotalBNBRefCommission, useTotalBUSDRefCommission } from 'hooks/useTotalRefCommission'
import { Card, CardBody, CardHeader, Flex, Text, Heading } from '@pancakeswap/uikit';

const CustomFlex = styled(Flex)`
    justify-content:space-between;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
`;

const CustomCardHeader = styled(CardHeader)`
    background: ${({ theme }) => theme.colors.backgroundAlt2};
    `;
const CustomText = styled(Text)`
    color:#fff; 
`
const CustomCardBody = styled(CardBody)`
    background: ${({ theme }) => theme.card.background};
    // min-height: 130px;
    `
const CustomCard = styled(Card)`
    margin-top: 20px;
    `

const ReferralCommission = () => {
    const  refCommission = useTotalRefCommission();
    const wbnbCommission  =  useTotalBNBRefCommission();
    const busdCommission = useTotalBUSDRefCommission();
    return (
        <CustomCard>
            <CustomCardHeader>
                <CustomText>All Referral Commissions</CustomText>
            </CustomCardHeader>
            <CustomCardBody>
                <CustomFlex>
                    <div>
                        <Heading size="lg">DEPs</Heading>
                        <Text small>Total DEPs you earned</Text>
                    </div>
                    <Heading size="lg">{Number(refCommission).toFixed(4)}</Heading>
                </CustomFlex>
                {/* <CustomFlex>
                    <div>
                        <Heading size="lg">WXAU</Heading>
                        <Text small>Total WXAUs you earned</Text>
                    </div>
                    <Heading size="lg">{Number(wbnbCommission).toFixed(4)}</Heading>
                </CustomFlex>
                <CustomFlex>
                    <div>
                        <Heading size="lg">USDTs</Heading>
                        <Text small>Total USDTs you earned</Text>
                    </div>
                    <Heading size="lg">{Number(busdCommission).toFixed(4)}</Heading>
                </CustomFlex> */}
            </CustomCardBody>
        </CustomCard>
    )
}

export default ReferralCommission
