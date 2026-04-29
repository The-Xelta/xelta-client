'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import {
  type DashboardPageId,
  HEADER_ITEMS,
  MAX_FAVORITE_COUNT,
  MAX_RECENT_COUNT,
  NAVIGATION_ITEMS,
} from '../navigation'

const FAVORITES_STORAGE_KEY = 'xelta.favoriteIds'
const DEFAULT_ACTIVE_PAGE_ID: DashboardPageId = 'overview'
const DEFAULT_FAVORITE_IDS = HEADER_ITEMS.favorites.map((item) => item.id)
const DEFAULT_RECENT_IDS = HEADER_ITEMS.recently.map((item) => item.id)

function getStoredFavoriteIds() {
  const storedFavoriteIds = window.localStorage.getItem(FAVORITES_STORAGE_KEY)

  if (!storedFavoriteIds) {
    return DEFAULT_FAVORITE_IDS
  }

  try {
    const parsedFavoriteIds = JSON.parse(storedFavoriteIds)

    if (!Array.isArray(parsedFavoriteIds)) {
      return DEFAULT_FAVORITE_IDS
    }

    return parsedFavoriteIds
      .filter(
        (id): id is DashboardPageId =>
          typeof id === 'string' &&
          NAVIGATION_ITEMS.some((item) => item.id === id),
      )
      .slice(0, MAX_FAVORITE_COUNT)
  } catch {
    return DEFAULT_FAVORITE_IDS
  }
}

interface UseDashboardStateResult {
  activeId: DashboardPageId
  activeItem: (typeof NAVIGATION_ITEMS)[number]
  favoriteIds: DashboardPageId[]
  isFavorite: boolean
  isSidebarOpen: boolean
  recentIds: DashboardPageId[]
  setActiveId: Dispatch<SetStateAction<DashboardPageId>>
  toggleFavorite: () => void
  toggleSidebar: () => void
}

export function useDashboardState(): UseDashboardStateResult {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeId, setActiveId] = useState<DashboardPageId>(
    DEFAULT_ACTIVE_PAGE_ID,
  )
  const [favoriteIds, setFavoriteIds] =
    useState<DashboardPageId[]>(DEFAULT_FAVORITE_IDS)
  const [recentIds, setRecentIds] =
    useState<DashboardPageId[]>(DEFAULT_RECENT_IDS)
  const [hasLoadedFavorites, setHasLoadedFavorites] = useState(false)

  const activeItem =
    NAVIGATION_ITEMS.find((item) => item.id === activeId) ?? NAVIGATION_ITEMS[0]

  useEffect(() => {
    setFavoriteIds(getStoredFavoriteIds())
    setHasLoadedFavorites(true)
  }, [])

  useEffect(() => {
    if (!hasLoadedFavorites) {
      return
    }

    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteIds),
    )
  }, [favoriteIds, hasLoadedFavorites])

  useEffect(() => {
    setRecentIds((prev) => {
      const nextRecentIds = [activeId, ...prev.filter((id) => id !== activeId)]

      return nextRecentIds.slice(0, MAX_RECENT_COUNT)
    })
  }, [activeId])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const toggleFavorite = () => {
    setFavoriteIds((prev) => {
      if (prev.includes(activeId)) {
        return prev.filter((id) => id !== activeId)
      }

      if (prev.length >= MAX_FAVORITE_COUNT) {
        return prev
      }

      return [...prev, activeId]
    })
  }

  return {
    activeId,
    activeItem,
    favoriteIds,
    isFavorite: favoriteIds.includes(activeId),
    isSidebarOpen,
    recentIds,
    setActiveId,
    toggleFavorite,
    toggleSidebar,
  }
}
