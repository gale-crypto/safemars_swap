import { ChainId } from '@pancakeswap/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { VaultKey } from 'state/types'

export const getAddress = (address: Address, chainId?: number): string => {
  return address[chainId] ? address[chainId] : address[ChainId.SOMNIA]
}

export const getMasterChefAddress = (chainId?: number) => {
  return getAddress(addresses.masterChef, chainId)
}

export const getPresaleAddress = (chainId?: number) => {
  return getAddress(addresses.presale, chainId)
}
export const getLendXAddress = (chainId?: number) => {
  return getAddress(addresses.lendX, chainId)
}
export const getMasterChefV1Address = () => {
  return getAddress(addresses.masterChefV1)
}
export const getMulticallAddress = (chainId?: number) => {
  return getAddress(addresses.multiCall, chainId)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPredictionsV1Address = () => {
  return getAddress(addresses.predictionsV1)
}

export const getTradingCompetitionAddressMoD = () => {
  return getAddress(addresses.tradingCompetitionMoD)
}

export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return getAddress(addresses[vaultKey])
}

export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}

export const getCakeFlexibleSideVaultAddress = () => {
  return getAddress(addresses.cakeFlexibleSideVault)
}

export const getFarmAuctionAddress = () => {
  return getAddress(addresses.farmAuction)
}
export const getNftMarketAddress = () => {
  return getAddress(addresses.nftMarket)
}
export const getNftSaleAddress = () => {
  return getAddress(addresses.nftSale)
}

export const getZapAddress = () => {
  return getAddress(addresses.zap)
}

export const getReferralAddress = (chainId?: number) => {
  return getAddress(addresses.referral, chainId)
}