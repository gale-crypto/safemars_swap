import React from 'react'
    import styled from 'styled-components'
import { Card, CardBody, CardFooter, Text, Heading, CardHeader, Cards, Flex } from '@pancakeswap/uikit'
import useTotalReferralCount from 'hooks/useTotalReferralCount'
import { useGetReferrate, useGetFarmReferrate } from 'hooks/useTotalRefCommission';

const CustomFlex = styled(Flex)`
    justify-content:space-between;
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
    min-height: 130px;
    `

const ReferralDetails = () => {
    const commistionrate = useGetReferrate();
    const farmCommitionrate = useGetFarmReferrate();
    return (
        <Card>
            <CustomCardHeader>
                <CustomText>All Referrals</CustomText>
            </CustomCardHeader>
            {/* <CustomCardBody>
                <CustomFlex>
                    <div>
                        <Heading size="lg">Referral 1</Heading>
                        <Text small>Swap referral: If your friend buy Pana token on swap page, you will get 5% of his earning.</Text>
                    </div>
                    <Heading size="lg">{commistionrate}%</Heading>
                </CustomFlex>

            </CustomCardBody> */}
            <CustomCardBody>
                <CustomFlex >
                    <div>
                        <Heading size="lg">Referral 1</Heading>
                        <Text small>Farm & Pool referral: If your friend stakes on farming and pool, you will get 5% of his earning forever</Text>
                    </div>
                    <Heading size="lg">{farmCommitionrate}%</Heading>
                </CustomFlex>
            </CustomCardBody>
            <CustomCardBody>
                <CustomFlex >
                    <div>
                        <Heading size="lg">Referral 2</Heading>
                        <Text small>Lottery referral: You will get 5% of your friend&apos;s earning</Text>
                    </div>
                    <Heading size="lg">{farmCommitionrate}%</Heading>
                </CustomFlex>
            </CustomCardBody>
            {/* <CardFooter>
            </CardFooter> */}
        </Card>
    )
}

export default ReferralDetails
