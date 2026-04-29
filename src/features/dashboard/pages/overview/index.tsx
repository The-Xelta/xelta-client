import { Typo } from 'components'

import * as S from './overview.styled'

const quickStatusCards = [
  {
    label: 'Total Servers Online',
    value: '12',
    change: '+2 this week',
    tone: 'neutral',
  },
  {
    label: 'Running Containers',
    value: '48',
    change: '94% healthy',
    tone: 'neutral',
  },
  {
    label: 'Active AI Agents',
    value: '9',
    change: '3 high-priority tasks',
    tone: 'accent',
  },
  {
    label: 'Current Alerts',
    value: '4',
    change: '1 critical',
    tone: 'critical',
  },
] as const

const infrastructureHealth = [
  {
    name: 'xelta-core-01',
    role: 'Gateway',
    cpu: 34,
    memory: 58,
    disk: 61,
    temperature: '62 C',
    network: '1.4 Gbps',
  },
  {
    name: 'xelta-core-02',
    role: 'Inference',
    cpu: 72,
    memory: 66,
    disk: 48,
    temperature: '69 C',
    network: '2.1 Gbps',
  },
  {
    name: 'xelta-edge-04',
    role: 'Worker',
    cpu: 29,
    memory: 41,
    disk: 37,
    temperature: '51 C',
    network: '860 Mbps',
  },
] as const

const services = [
  {
    name: 'postgres-primary',
    status: 'Healthy',
    usage: 'CPU 18% / MEM 42%',
    uptime: '16d 04h',
  },
  {
    name: 'redis-cache',
    status: 'Healthy',
    usage: 'CPU 9% / MEM 21%',
    uptime: '23d 11h',
  },
  {
    name: 'agent-orchestrator',
    status: 'Degraded',
    usage: 'CPU 67% / MEM 74%',
    uptime: '2d 07h',
  },
  {
    name: 'xelta-api',
    status: 'Healthy',
    usage: 'CPU 24% / MEM 38%',
    uptime: '11d 22h',
  },
] as const

const agents = [
  {
    name: 'Infra Watcher',
    status: 'Running',
    tasks: '4 active automations',
    queue: '2 queued',
  },
  {
    name: 'Incident Triage',
    status: 'Busy',
    tasks: 'Investigating alert spike',
    queue: '5 queued',
  },
  {
    name: 'Deploy Assistant',
    status: 'Idle',
    tasks: 'Awaiting deployment window',
    queue: '0 queued',
  },
] as const

const recentActivity = [
  {
    time: '2 min ago',
    title: 'Agent Orchestrator restarted',
    detail: 'Container recovered after memory pressure threshold was reached.',
  },
  {
    time: '11 min ago',
    title: 'New infrastructure check completed',
    detail: 'All worker nodes passed CPU and temperature verification.',
  },
  {
    time: '28 min ago',
    title: 'Security policy updated',
    detail: 'Outbound access for staging agents was tightened.',
  },
] as const

const alerts = [
  {
    level: 'Critical',
    title: 'Inference node memory pressure',
    detail: 'xelta-core-02 is sustaining 90%+ memory usage during peak load.',
  },
  {
    level: 'Warning',
    title: 'Docker image drift detected',
    detail: 'Two worker containers are running an older agent image version.',
  },
  {
    level: 'Warning',
    title: 'Temperature trend elevated',
    detail: 'Rack B servers are trending warmer than their 7-day average.',
  },
] as const

function getUsageTone(value: number) {
  if (value >= 70) return 'critical'
  if (value >= 50) return 'warning'
  return 'stable'
}

function getStatusTone(status: string) {
  if (status === 'Degraded' || status === 'Busy') return 'warning'
  if (status === 'Critical') return 'critical'
  return 'stable'
}

export default function OverviewPage() {
  return (
    <S.Wrapper>
      <S.QuickGrid>
        {quickStatusCards.map((card) => (
          <S.StatusCard key={card.label}>
            <S.CardHeader>
              <Typo variant='captionM' color='rgba(0, 0, 0, 0.48)'>
                {card.label}
              </Typo>
              <S.Dot tone={card.tone} />
            </S.CardHeader>
            <Typo variant='headlineM'>{card.value}</Typo>
            <Typo variant='body2' color='rgba(0, 0, 0, 0.5)'>
              {card.change}
            </Typo>
          </S.StatusCard>
        ))}
      </S.QuickGrid>

      <S.Section>
        <S.SectionHeader>
          <Typo variant='title3'>Infrastructure Health</Typo>
          <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
            CPU, memory, disk, temperature, and network usage by server
          </Typo>
        </S.SectionHeader>
        <S.HealthGrid>
          {infrastructureHealth.map((server) => (
            <S.HealthCard key={server.name}>
              <S.ServerHeader>
                <div>
                  <Typo variant='title4'>{server.name}</Typo>
                  <Typo variant='body2' color='rgba(0, 0, 0, 0.45)'>
                    {server.role}
                  </Typo>
                </div>
                <S.Pill tone='stable'>Online</S.Pill>
              </S.ServerHeader>

              <S.MetricStack>
                <S.MetricRow>
                  <S.MetricLabel>
                    <Typo variant='body2'>CPU usage</Typo>
                    <Typo variant='body2' color='rgba(0, 0, 0, 0.45)'>
                      {server.cpu}%
                    </Typo>
                  </S.MetricLabel>
                  <S.ProgressTrack>
                    <S.ProgressFill
                      tone={getUsageTone(server.cpu)}
                      value={server.cpu}
                    />
                  </S.ProgressTrack>
                </S.MetricRow>

                <S.MetricRow>
                  <S.MetricLabel>
                    <Typo variant='body2'>Memory usage</Typo>
                    <Typo variant='body2' color='rgba(0, 0, 0, 0.45)'>
                      {server.memory}%
                    </Typo>
                  </S.MetricLabel>
                  <S.ProgressTrack>
                    <S.ProgressFill
                      tone={getUsageTone(server.memory)}
                      value={server.memory}
                    />
                  </S.ProgressTrack>
                </S.MetricRow>

                <S.MetricRow>
                  <S.MetricLabel>
                    <Typo variant='body2'>Disk usage</Typo>
                    <Typo variant='body2' color='rgba(0, 0, 0, 0.45)'>
                      {server.disk}%
                    </Typo>
                  </S.MetricLabel>
                  <S.ProgressTrack>
                    <S.ProgressFill
                      tone={getUsageTone(server.disk)}
                      value={server.disk}
                    />
                  </S.ProgressTrack>
                </S.MetricRow>
              </S.MetricStack>

              <S.ServerMeta>
                <S.MetaCard>
                  <Typo variant='captionS' color='rgba(0, 0, 0, 0.42)'>
                    Temperature
                  </Typo>
                  <Typo variant='button2'>{server.temperature}</Typo>
                </S.MetaCard>
                <S.MetaCard>
                  <Typo variant='captionS' color='rgba(0, 0, 0, 0.42)'>
                    Network
                  </Typo>
                  <Typo variant='button2'>{server.network}</Typo>
                </S.MetaCard>
              </S.ServerMeta>
            </S.HealthCard>
          ))}
        </S.HealthGrid>
      </S.Section>

      <S.TwoColumnGrid>
        <S.SectionCard>
          <S.SectionHeader>
            <Typo variant='title3'>Services</Typo>
            <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
              Running Docker containers and resource usage
            </Typo>
          </S.SectionHeader>
          <S.List>
            {services.map((service) => (
              <S.ListRow key={service.name}>
                <S.ListContent>
                  <Typo variant='button2'>{service.name}</Typo>
                  <Typo variant='body2' color='rgba(0, 0, 0, 0.46)'>
                    {service.usage}
                  </Typo>
                </S.ListContent>
                <S.ListAside>
                  <S.Pill tone={getStatusTone(service.status)}>
                    {service.status}
                  </S.Pill>
                  <Typo variant='captionM' color='rgba(0, 0, 0, 0.45)'>
                    {service.uptime}
                  </Typo>
                </S.ListAside>
              </S.ListRow>
            ))}
          </S.List>
        </S.SectionCard>

        <S.SectionCard>
          <S.SectionHeader>
            <Typo variant='title3'>AI Agents</Typo>
            <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
              Agent status, running tasks, and queue overview
            </Typo>
          </S.SectionHeader>
          <S.List>
            {agents.map((agent) => (
              <S.ListRow key={agent.name}>
                <S.ListContent>
                  <Typo variant='button2'>{agent.name}</Typo>
                  <Typo variant='body2' color='rgba(0, 0, 0, 0.46)'>
                    {agent.tasks}
                  </Typo>
                </S.ListContent>
                <S.ListAside>
                  <S.Pill tone={getStatusTone(agent.status)}>
                    {agent.status}
                  </S.Pill>
                  <Typo variant='captionM' color='rgba(0, 0, 0, 0.45)'>
                    {agent.queue}
                  </Typo>
                </S.ListAside>
              </S.ListRow>
            ))}
          </S.List>
        </S.SectionCard>
      </S.TwoColumnGrid>

      <S.TwoColumnGrid>
        <S.SectionCard>
          <S.SectionHeader>
            <Typo variant='title3'>Recent Activity</Typo>
            <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
              Timeline of the latest platform actions
            </Typo>
          </S.SectionHeader>
          <S.Timeline>
            {recentActivity.map((item) => (
              <S.TimelineItem key={`${item.time}-${item.title}`}>
                <S.TimelineMarker />
                <S.TimelineContent>
                  <Typo variant='captionM' color='rgba(0, 0, 0, 0.42)'>
                    {item.time}
                  </Typo>
                  <Typo variant='button2'>{item.title}</Typo>
                  <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
                    {item.detail}
                  </Typo>
                </S.TimelineContent>
              </S.TimelineItem>
            ))}
          </S.Timeline>
        </S.SectionCard>

        <S.SectionCard>
          <S.SectionHeader>
            <Typo variant='title3'>Alerts</Typo>
            <Typo variant='body2' color='rgba(0, 0, 0, 0.48)'>
              Critical warnings and failures requiring attention
            </Typo>
          </S.SectionHeader>
          <S.AlertStack>
            {alerts.map((alert) => (
              <S.AlertCard key={alert.title} tone={getStatusTone(alert.level)}>
                <S.CardHeader>
                  <Typo variant='button2'>{alert.title}</Typo>
                  <S.Pill tone={getStatusTone(alert.level)}>
                    {alert.level}
                  </S.Pill>
                </S.CardHeader>
                <Typo variant='body2' color='rgba(0, 0, 0, 0.5)'>
                  {alert.detail}
                </Typo>
              </S.AlertCard>
            ))}
          </S.AlertStack>
        </S.SectionCard>
      </S.TwoColumnGrid>
    </S.Wrapper>
  )
}
