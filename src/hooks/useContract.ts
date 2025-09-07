import {
  Cake,
  CakeFlexibleSideVaultV2,
  CakeVaultV2,
  Erc20,
  Erc20Bytes32,
  Erc721collection,
  Multicall,
  Weth,
  Zap,
} from 'config/abi/types'
import zapAbi from 'config/abi/zap.json'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useProviderOrSigner } from 'hooks/useProviderOrSigner'
import { useMemo } from 'react'
import { getMulticallAddress, getNftSaleAddress, getPredictionsV1Address, getZapAddress } from 'utils/addressHelpers'

import nftSaleAbi from 'config/abi/nftSale.json'
import {
  getBep20Contract,
  getCakeContract,
  getCakeFlexibleSideVaultV2Contract,
  getCakePredictionsContract,
  getCakeVaultV2Contract,
  getChainlinkOracleContract,
  getErc721CollectionContract,
  getErc721Contract,
  getFarmAuctionContract,
  getIfoV1Contract,
  getIfoV2Contract,
  getIfoV3Contract,
  getLotteryV2Contract,
  getMasterchefContract,
  getMasterchefV1Contract,
  getNftMarketContract,
  getNftSaleContract,
  getPotteryVaultContract,
  getPredictionsContract,
  getPredictionsV1Contract,
  getSouschefContract,
  getTradingCompetitionContractMoD,
  getPresaleContract,
  getLendXContract,
} from 'utils/contractHelpers'
import { useSigner } from 'wagmi'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { WNATIVE } from '@pancakeswap/sdk'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import IPancakePairABI from '../config/abi/IPancakePair.json'
import multiCallAbi from '../config/abi/Multicall.json'
import WETH_ABI from '../config/abi/weth.json'
import { getContract } from '../utils'

import { IPancakePair } from '../config/abi/types/IPancakePair'
import { VaultKey } from '../state/types'
import { useActiveChainId } from './useActiveChainId'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoV1Contract = (address: string) => {
  const { data: signer } = useSigner()
  return useMemo(() => getIfoV1Contract(address, signer), [address, signer])
}

export const useIfoV2Contract = (address: string) => {
  const { data: signer } = useSigner()
  return useMemo(() => getIfoV2Contract(address, signer), [address, signer])
}

export const useIfoV3Contract = (address: string) => {
  const { data: signer } = useSigner()
  return useMemo(() => getIfoV3Contract(address, signer), [address, signer])
}

export const useERC20 = (address: string, withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getBep20Contract(address, providerOrSigner), [address, providerOrSigner])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string, withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getErc721Contract(address, providerOrSigner), [address, providerOrSigner])
}

export const useCake = (): { reader: Cake; signer: Cake } => {
  const providerOrSigner = useProviderOrSigner()
  return useMemo(
    () => ({
      reader: getCakeContract(null),
      signer: getCakeContract(providerOrSigner),
    }),
    [providerOrSigner],
  )
}


export const useLotteryV2Contract = () => {
  const providerOrSigner = useProviderOrSigner()
  return useMemo(() => getLotteryV2Contract(providerOrSigner), [providerOrSigner])
}

export const useMasterchef = (withSignerIfPossible = true) => {
  const { chainId } = useActiveChainId()
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getMasterchefContract(providerOrSigner, chainId), [providerOrSigner, chainId])
}

export const usePresale = (withSignerIfPossible = true) => {
  const { chainId } = useActiveChainId()
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getPresaleContract(providerOrSigner, chainId), [providerOrSigner])
}

export const useLendX = (withSignerIfPossible = true) => {
  const { chainId } = useActiveChainId()
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getLendXContract(providerOrSigner, chainId), [providerOrSigner])
}


export const useMasterchefV1 = () => {
  const { data: signer } = useSigner()
  return useMemo(() => getMasterchefV1Contract(signer), [signer])
}

export const useSousChef = (id) => {
  const { data: signer } = useSigner()
  return useMemo(() => getSouschefContract(id, signer), [id, signer])
}

export const useTradingCompetitionContractMoD = (withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getTradingCompetitionContractMoD(providerOrSigner), [providerOrSigner])
}

export const useVaultPoolContract = (vaultKey: VaultKey): CakeVaultV2 | CakeFlexibleSideVaultV2 => {
  const { data: signer } = useSigner()
  return useMemo(() => {
    if (vaultKey === VaultKey.CakeVault) {
      return getCakeVaultV2Contract(signer)
    }
    if (vaultKey === VaultKey.CakeFlexibleSideVault) {
      return getCakeFlexibleSideVaultV2Contract(signer)
    }
    return null
  }, [signer, vaultKey])
}

export const useCakeVaultContract = (withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getCakeVaultV2Contract(providerOrSigner), [providerOrSigner])
}

export const usePredictionsContract = (address: string, tokenSymbol: string) => {
  const { data: signer } = useSigner()
  return useMemo(() => {
    if (address === getPredictionsV1Address()) {
      return getPredictionsV1Contract(signer)
    }
    const getPredContract = tokenSymbol === 'CAKE' ? getCakePredictionsContract : getPredictionsContract

    return getPredContract(address, signer)
  }, [address, tokenSymbol, signer])
}

export const useChainlinkOracleContract = (address, withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getChainlinkOracleContract(address, providerOrSigner), [providerOrSigner, address])
}

export const useNftSaleContract = () => {
  const { data: signer } = useSigner()
  return useMemo(() => getNftSaleContract(signer), [signer])
}


export const useFarmAuctionContract = (withSignerIfPossible = true) => {
  const providerOrSigner = useProviderOrSigner(withSignerIfPossible)
  return useMemo(() => getFarmAuctionContract(providerOrSigner), [providerOrSigner])
}

export const useNftMarketContract = () => {
  const { data: signer } = useSigner()
  return useMemo(() => getNftMarketContract(signer), [signer])
}

export const useErc721CollectionContract = (
  collectionAddress: string,
): { reader: Erc721collection; signer: Erc721collection } => {
  const { data: signer } = useSigner()
  return useMemo(
    () => ({
      reader: getErc721CollectionContract(null, collectionAddress),
      signer: getErc721CollectionContract(signer, collectionAddress),
    }),
    [signer, collectionAddress],
  )
}

// Code below migrated from Exchange useContract.ts

// returns null on errors
export function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { provider } = useActiveWeb3React()

  const providerOrSigner = useProviderOrSigner(withSignerIfPossible) ?? provider

  const canReturnContract = useMemo(() => address && ABI && providerOrSigner, [address, ABI, providerOrSigner])

  return useMemo(() => {
    if (!canReturnContract) return null
    try {
      return getContract(address, ABI, providerOrSigner)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, providerOrSigner, canReturnContract]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWNativeContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract<Weth>(chainId ? WNATIVE[chainId]?.address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract<Erc20Bytes32>(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): IPancakePair | null {
  return useContract(pairAddress, IPancakePairABI, withSignerIfPossible)
}

export function useMulticallContract() {
  const { chainId } = useActiveWeb3React()
  return useContract<Multicall>(getMulticallAddress(chainId), multiCallAbi, false)
}

export const usePotterytVaultContract = (address) => {
  const { data: signer } = useSigner()
  return useMemo(() => getPotteryVaultContract(address, signer), [address, signer])
}

export function useZapContract(withSignerIfPossible = true) {
  return useContract<any>(getZapAddress(), zapAbi, withSignerIfPossible)
}

export function useNftContract(withSignerIfPossible = true) {
  return useContract<any>(getNftSaleAddress(), nftSaleAbi, withSignerIfPossible)
}
