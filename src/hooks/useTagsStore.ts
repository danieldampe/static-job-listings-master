import { create } from 'zustand'
import { Tag } from '../types'

interface State {
  tags: Tag[]
}

interface Action {
  addTag: (tagToAdd: Tag) => void
  removeTag: (tagToRemove: Tag) => void
  clear: () => void
}

export const useTagsStore = create<State & Action>((set) => ({
  tags: [],
  addTag: (tagToAdd) => set((state) => {
    const isAdded = state.tags.some(tag => tag === tagToAdd)

    return !isAdded
      ? { tags: [...state.tags, tagToAdd] }
      : { tags: [...state.tags] }
  }),
  removeTag: (tagToRemove) => set((state) => ({
    tags: state.tags.filter(tag => tag !== tagToRemove)
  })),
  clear: () => set(() => ({ tags: [] }))
}))
