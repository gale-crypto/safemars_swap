import { useEffect, useState } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useRefresh from './useRefresh'
import {  getReferralContract } from 'utils/contractHelpers'

const useTotalReferralCount = () => {
    const [count, setCount] = useState(0)
    const { account } = useActiveWeb3React()
    const { slowRefresh } = useRefresh()
    
    useEffect(() => {
        async function fetchTotalRef() {
            const refContract = getReferralContract()
            const total = await refContract.referralsCount(account)
            setCount(Number(total))
        }
        fetchTotalRef()
    }, [account, slowRefresh])

    return count
}

export default useTotalReferralCount