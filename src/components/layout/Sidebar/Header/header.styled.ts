import styled from '@emotion/styled'

export const Wrapper = styled.div`
  // Layout
  display: flex;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`

export const Tabs = styled.div`
  // Layout
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  align-self: stretch;
  flex-wrap: wrap;
`

export const Tab = styled.button<{ active?: boolean }>`
  // Layout
  display: flex;
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  // Style
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

export const Item = styled.button`
  // Layout
  display: flex;
  padding: 0.5rem;
  align-items: center;
  align-content: center;
  gap: 0.25rem 0.25rem;
  align-self: stretch;
  flex-wrap: wrap;

  // Style
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 0.75rem;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

export const Divider = styled.div`
  // Layout
  display: flex;
  padding: 0.125rem 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

export const ItemIcon = styled.div`
  // Layout
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
`

export const Indicator = styled.div`
  // Layout
  width: 0.375rem;
  height: 0.375rem;

  // Style
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
`

export const EmptyState = styled.div`
  // Layout
  display: flex;
  padding: 0.5rem 0.75rem;
  align-items: center;
  align-self: stretch;
`
