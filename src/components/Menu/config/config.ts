import {
  MenuItemsType,
  SwapIcon,
  ExpandIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
  HomeIcon,
  TicketIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Home'),
      icon: HomeIcon,
      fillIcon: HomeIcon,
      href: '/',
      showItemsOnMobile: false,
      items: [
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Swap'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Pool'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/liquidity',
      showItemsOnMobile: false,
      items: [      
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    // {
    //   label: t('Staking'),
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   href: '/staking',
    //   showItemsOnMobile: false,
    //   items: [
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('XAmplify'),
    //   icon: SwapIcon,
    //   fillIcon: SwapFillIcon,
    //   href: '/xamplify',
    //   showItemsOnMobile: false,
    //   items: [      
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Presale'),
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   href: '/presale',
    //   image: '/images/decorations/pe2.png',
    //   showItemsOnMobile: false,
    //   items: [
    //   ].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Referral'),
    //   icon: TrophyIcon,
    //   fillIcon: TrophyFillIcon,
    //   href: '/referral',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Lotto'),
    //   icon: TicketIcon,
    //   href: 'https://lotto.defipower.com/',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Bridge'),
    //   icon: ExpandIcon,
    //   href: 'https://bridge.dexwallet.com/',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },
    // {
    //   label: t('Info'),
    //   icon: MoreIcon,
    //   href: '/info',
    //   showItemsOnMobile: false,
    //   items: [].map((item) => addMenuItemSupported(item, chainId)),
    // },    
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
