import {
  ActivityIcon,
  ChartPieSliceIcon,
  CubeIcon,
  GearSixIcon,
  HardDrivesIcon,
  MagicWandIcon,
  type Icon as PhosphorIcon,
  RobotIcon,
  ShieldIcon,
} from '@phosphor-icons/react'

export interface SidebarShortcutItem {
  id: string
  label: string
}

export interface SidebarNavigationItem extends SidebarShortcutItem {
  icon: PhosphorIcon
}

export interface SidebarNavigationSection {
  title: string
  items: SidebarNavigationItem[]
}

export const HEADER_LABELS = [
  { key: 'favorites', label: 'Favorites' },
  { key: 'recently', label: 'Recently' },
] as const

export type HeaderTabKey = (typeof HEADER_LABELS)[number]['key']

export const HEADER_ITEMS: Record<HeaderTabKey, SidebarShortcutItem[]> = {
  favorites: [
    { id: 'overview', label: 'Overview' },
    { id: 'security', label: 'Security' },
  ],
  recently: [
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'containers', label: 'Containers' },
  ],
}

export const NAVIGATION_SECTIONS: SidebarNavigationSection[] = [
  {
    title: 'Workspace',
    items: [
      {
        id: 'overview',
        icon: ChartPieSliceIcon,
        label: 'Overview',
      },
      {
        id: 'infrastructure',
        icon: HardDrivesIcon,
        label: 'Infrastructure',
      },
      {
        id: 'containers',
        icon: CubeIcon,
        label: 'Containers',
      },
      {
        id: 'agents',
        icon: RobotIcon,
        label: 'Agents',
      },
      {
        id: 'monitoring',
        icon: ActivityIcon,
        label: 'Monitoring',
      },
      {
        id: 'automation',
        icon: MagicWandIcon,
        label: 'Automation',
      },
      {
        id: 'security',
        icon: ShieldIcon,
        label: 'Security',
      },
      {
        id: 'settings',
        icon: GearSixIcon,
        label: 'Settings',
      },
    ],
  },
]

export const NAVIGATION_ITEMS = NAVIGATION_SECTIONS.flatMap(
  (section) => section.items,
)

export type DashboardPageId = (typeof NAVIGATION_ITEMS)[number]['id']

export const MAX_FAVORITE_COUNT = 2
export const MAX_RECENT_COUNT = 2
