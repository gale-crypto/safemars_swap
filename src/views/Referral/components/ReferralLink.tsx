import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Link, Text, Heading, CardHeader } from '@pancakeswap/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import copy from 'copy-to-clipboard';
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import rot13 from '../../../utils/encode'

const StyledLink = styled(Link)`
    cursor: pointer;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.secondary};
    align-self: center;
    margin: 0px auto;
    margin-top: 15px;
`

const StyledFooter = styled(CardFooter)`
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  min-height: 120px;
  background: ${({ theme }) => theme.card.background};
`

const StyledButton = styled(Button)`
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 600;
    height: 32px;
    padding: 0px 16px;
    opacity: 1;

    &:hover {
        background-color: transparent !important;
        opacity: 0.8;
    }

    &:focus {
        box-shadow: none;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
`

const CustomHeader = styled(CardHeader)`
    background: ${({ theme }) => theme.colors.backgroundAlt2};
`
const CustomCardBody = styled(CardBody)`
    background: #e5e5e5;
    min-height: 130px;
    `

const ReferralLink = () => {
    const { account } = useActiveWeb3React()
    const [text, setText] = useState("Copy");

    const { toastSuccess } = useToast()

    const onClick = () => {
        copy(`https://defipower.com/?ref=${rot13(account)}`);

        setText("Copied");
        toastSuccess('', 'Copied')
        setTimeout(() => { 
            setText("Copy"); 
        }, 1000);
    }

    return (
        <Card>
            <CustomHeader>
                <Container>
                    <Heading color="#fff" size="sm">Your Referral Link</Heading>
                    <StyledButton  onClick={onClick}>{text}</StyledButton>
                </Container>
            </CustomHeader>
            <StyledFooter>
                <StyledLink>{`https://defipower.com/?ref=${rot13(account)}`}</StyledLink>
            </StyledFooter>
        </Card>
    )
}

export default ReferralLink
