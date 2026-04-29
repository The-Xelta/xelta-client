import styled from '@emotion/styled'

type Tone = 'neutral' | 'accent' | 'critical' | 'stable' | 'warning'

const toneStyles: Record<Tone, { bg: string; fg: string; border: string }> = {
  neutral: {
    bg: 'rgba(0, 0, 0, 0.04)',
    fg: 'rgba(0, 0, 0, 0.68)',
    border: 'rgba(0, 0, 0, 0.08)',
  },
  accent: {
    bg: 'rgba(0, 0, 0, 0.06)',
    fg: 'rgba(0, 0, 0, 0.9)',
    border: 'rgba(0, 0, 0, 0.12)',
  },
  critical: {
    bg: 'rgba(0, 0, 0, 0.1)',
    fg: 'rgba(0, 0, 0, 0.94)',
    border: 'rgba(0, 0, 0, 0.16)',
  },
  stable: {
    bg: 'rgba(0, 0, 0, 0.05)',
    fg: 'rgba(0, 0, 0, 0.74)',
    border: 'rgba(0, 0, 0, 0.1)',
  },
  warning: {
    bg: 'rgba(0, 0, 0, 0.08)',
    fg: 'rgba(0, 0, 0, 0.82)',
    border: 'rgba(0, 0, 0, 0.14)',
  },
}

const surface = `
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
`

export const QuickGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const StatusCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  ${surface}
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`

export const Dot = styled.span<{ tone: Tone }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 999px;
  background: ${({ tone }) => toneStyles[tone].fg};
  border: 0.25rem solid ${({ tone }) => toneStyles[tone].bg};
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const HealthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1180px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const HealthCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  ${surface}
`

export const ServerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`

export const Pill = styled.div<{ tone: Tone }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  border: 1px solid ${({ tone }) => toneStyles[tone].border};
  background: ${({ tone }) => toneStyles[tone].bg};
  color: ${({ tone }) => toneStyles[tone].fg};
  font-size: 0.75rem;
  font-weight: 500;
`

export const MetricStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`

export const MetricRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

export const MetricLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  overflow: hidden;
`

export const ProgressFill = styled.div<{ tone: Tone; value: number }>`
  width: ${({ value }) => `${value}%`};
  height: 100%;
  border-radius: inherit;
  background: ${({ tone }) => toneStyles[tone].fg};
`

export const ServerMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
`

export const MetaCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(0, 0, 0, 0.025);
`

export const TwoColumnGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const SectionCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  ${surface}
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(0, 0, 0, 0.025);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const ListAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.375rem;

  @media (max-width: 640px) {
    align-items: flex-start;
  }
`

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1rem minmax(0, 1fr);
  gap: 0.875rem;
`

export const TimelineMarker = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 0.25rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.7);
  border: 0.35rem solid rgba(0, 0, 0, 0.06);
`

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`

export const AlertStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const AlertCard = styled.div<{ tone: Tone }>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ tone }) => toneStyles[tone].border};
  background: ${({ tone }) => toneStyles[tone].bg};
`
