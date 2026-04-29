import type { ComponentType } from 'react'
import type { DashboardPageId } from '../navigation'

import AgentsPage from './agents'
import AutomationPage from './automation'
import ContainersPage from './containers'
import InfrastructurePage from './infrastructure'
import MonitoringPage from './monitoring'
import OverviewPage from './overview'
import SecurityPage from './security'
import SettingsPage from './settings'

export const DASHBOARD_PAGE_COMPONENTS = {
  agents: AgentsPage,
  automation: AutomationPage,
  containers: ContainersPage,
  infrastructure: InfrastructurePage,
  monitoring: MonitoringPage,
  overview: OverviewPage,
  security: SecurityPage,
  settings: SettingsPage,
} satisfies Record<DashboardPageId, ComponentType>
