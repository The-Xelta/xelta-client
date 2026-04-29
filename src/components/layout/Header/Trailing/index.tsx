'use client'

import {
  ArrowsClockwiseIcon,
  FileTextIcon,
  PlusIcon,
  RobotIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react'
import { Icon } from 'components'

import * as S from './trailing.styled'

const ACTION_ITEMS = [
  {
    label: 'Restart Server',
    icon: ArrowsClockwiseIcon,
  },
  {
    label: 'Deploy Service',
    icon: RocketLaunchIcon,
  },
  {
    label: 'Run Agent',
    icon: RobotIcon,
  },
  {
    label: 'Open Logs',
    icon: FileTextIcon,
  },
  {
    label: 'Create Task',
    icon: PlusIcon,
  },
] as const

export default function HeaderTrailing() {
  return (
    <S.Wrapper>
      {ACTION_ITEMS.map((item) => (
        <Icon icon={item.icon} size={16} key={item.label}/>
      ))}
    </S.Wrapper>
  )
}
