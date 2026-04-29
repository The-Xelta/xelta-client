import {
  BookOpenIcon,
  ChartPieSliceIcon,
  FolderOpenIcon,
  IdentificationBadgeIcon,
  ShoppingBagIcon,
  UsersIcon,
} from '@phosphor-icons/react'

// Header
export const HEADER_LABELS = [
  { key: 'favorites', label: 'Favorites' },
  { key: 'recently', label: 'Recently' },
] as const

export const HEADER_ITEMS = [{ label: 'Overview' }, { label: 'Project' }]

// Navigation
export const NAVIGATION_SECTIONS = [
  {
    title: 'Dashboards',
    items: [
      {
        id: 'overview',
        icon: ChartPieSliceIcon,
        label: 'Overview',
      },
      {
        id: 'ecommerce',
        icon: ShoppingBagIcon,
        label: 'eCommerce',
      },
      {
        id: 'projects',
        icon: FolderOpenIcon,
        label: 'Projects',
      },
      {
        id: 'online-courses',
        icon: BookOpenIcon,
        label: 'Online Courses',
      },
    ],
  },
  {
    title: 'Utilities',
    items: [
      {
        id: 'user-profile',
        icon: UsersIcon,
        label: 'User Avatar',
      },
      {
        id: 'account',
        icon: IdentificationBadgeIcon,
        label: 'Account',
      },
    ],
  },
]
