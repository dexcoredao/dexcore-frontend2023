import { ContextApi } from 'contexts/Localization/types'

import {
  DropdownMenuItemType,
  MenuItemsType,
} from '@pancakeswap/uikit'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  
  {
    label: t('More'),
    href: '#',
    icon: 'More',
    hideSubNav: false,
    items: [
      {
        label: t('Explorer'),
        href: 'https://alveyscan.com/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Bridge'),
        href: 'https://alveybridge.com/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Website'),
        href: 'https://alveychain.com/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }
    ],
  }
]

export default config
