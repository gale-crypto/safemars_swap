import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, CardFooter, Text, Heading, CardHeader, Flex } from '@pancakeswap/uikit'
import useTotalReferralCount from 'hooks/useTotalReferralCount'


const CustomFlex = styled(Flex)`
    justify-content:space-between;
    margin-left: 10px;
    margin-right: 10px;
`;

const CustomCardHeader = styled(CardHeader)`
    background: ${({ theme }) => theme.colors.backgroundAlt2};;
    `;

const CustomText = styled(Text)`
    color:#fff;
    `
const CustomCardBody = styled(CardBody)`
    background: ${({ theme }) => theme.card.background};
    `
const TotalReferral = () => {
    const referralCount = useTotalReferralCount();
    return (
        <Card>
            <CustomCardHeader>
                <CustomText>Your Referral </CustomText>
            </CustomCardHeader>
            <CustomCardBody>
                <CustomFlex>
                    <div>
                        <Heading size="lg">Total Referrals</Heading>
                        <Text small>Total number you made referrals</Text>
                    </div>
                    <Heading size="lg">{referralCount}</Heading>
                </CustomFlex>
            </CustomCardBody>
        </Card>
    )
}

export default TotalReferral
