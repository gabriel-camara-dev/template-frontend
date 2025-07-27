import { create } from 'zustand'
import type { User } from '../@types/User'
import { persist } from 'zustand/middleware'

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  updateUser: (partialUser: Partial<User>) => void
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      updateUser: (partialUser) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...partialUser } : null,
        })),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
)
