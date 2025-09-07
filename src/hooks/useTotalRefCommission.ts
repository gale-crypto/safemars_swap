import { useEffect, useState } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getMasterChefAddress, getReferralAddress } from 'utils/addressHelpers'
import referral from 'config/abi/referral.json'
import masterchef from 'config/abi/masterchef.json'
import pools from 'config/constants/pools'
import sousChef from 'config/abi/sousChef.json'
import { formatEther } from '@ethersproject/units'
import useRefresh from './useRefresh'
import { getContract, getMasterchefContract, getReferralContract } from 'utils/contractHelpers'


const chainId = process.env.REACT_APP_CHAIN_ID
const useTotalRefCommission = () => {
    const [commission, setCommission] = useState('0')
    const { account } = useActiveWeb3React()
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalRef() {
            const refContract = getReferralContract();
            // const sousContract = getContract(sousChef, pools[0].contractAddress[chainId]);
            let totalCommissions = await refContract.totalReferralCommissions(account);
            // totalCommissions = Number(totalCommissions)
            // let totalCommissionsPool = await sousContract.methods.totalReferralCommissions(account).call();
            // totalCommissionsPool = Number(Web3.utils.fromWei(totalCommissionsPool, 'ether'))
            setCommission(totalCommissions.toString());
        }
        fetchTotalRef()
    }, [account, slowRefresh])

    return commission
}

export default useTotalRefCommission

export const useTotalBNBRefCommission = () => {
    const [commission, setCommission] = useState('0')
    const { account } = useActiveWeb3React()
    const { slowRefresh } = useRefresh()
    // useEffect(() => {
    //     async function fetchTotalRef() {
    //         const sousContract = getContract(sousChef, pools[2].contractAddress[chainId]);
    //         const totalCommissions = await sousContract.methods.totalReferralCommissions(account).call();
    //         setCommission(formatEther(totalCommissions));
    //     }
    //     fetchTotalRef()
    // }, [account, slowRefresh])

    return commission
}

export const useTotalBUSDRefCommission = () => {
    const [commission, setCommission] = useState('0')
    const { account } = useActiveWeb3React()
    const { slowRefresh } = useRefresh()

    // useEffect(() => {
    //     async function fetchTotalRef() {
    //         const sousContractBUSD = getContract(sousChef, pools[1].contractAddress[chainId]);
    //         const sousContractBUSDWBNB = getContract(sousChef, pools[3].contractAddress[chainId]);
    //         let totalCommissionsFromBUSD = await sousContractBUSD.methods.totalReferralCommissions(account).call();
    //         let totalCommissionsFromBUSDWBNB = await sousContractBUSDWBNB.methods.totalReferralCommissions(account).call();
    //         totalCommissionsFromBUSD = Number(formatEther(totalCommissionsFromBUSD))
    //         totalCommissionsFromBUSDWBNB = Number(formatEther(totalCommissionsFromBUSDWBNB))
    //         setCommission(totalCommissionsFromBUSDWBNB + totalCommissionsFromBUSD);
    //     }
    //     fetchTotalRef()
    // }, [account, slowRefresh])

    return commission
}




export const useGetReferrate = () => {

    const [commission, setCommission] = useState(5)
    const { slowRefresh } = useRefresh()

    // useEffect(() => {
    //     async function fetchTotalRef() {
    //         const routerContract = getContract(router, getRouterAddress())
    //         const commissionrate = await routerContract.methods.referralRewardPercent().call().then((res) => {
    //             setCommission(res/100)
    //         })
    //     }
    //     fetchTotalRef()
    // }, [slowRefresh])

    return commission
}

export const useGetFarmReferrate = () => {

    const [commission, setCommission] = useState(0)
    const { slowRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalRef() {
            const masterchefContract = getMasterchefContract()
            // const commissionrate = await masterchefContract.methods?.referralCommissionRate().call().then((res) => {
            //     setCommission(res/100)
            // })
        }
        fetchTotalRef()
    }, [slowRefresh])

    return commission
}