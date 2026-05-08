import { create } from 'zustand';

export type PageType = 'home' | 'builder' | 'pricing' | 'templates' | 'docs';

interface PageState {
  currentPage: PageType;
  navigate: (page: PageType) => void;
  projectPrompt: string;
  projectType: string;
  projectModel: string;
  setProjectPrompt: (prompt: string) => void;
  setProjectType: (type: string) => void;
  setProjectModel: (model: string) => void;
}

export const usePageStore = create<PageState>((set) => ({
  currentPage: 'home',
  navigate: (page) => set({ currentPage: page }),
  projectPrompt: '',
  projectType: 'fullstack',
  projectModel: 'blink-1.0-lite',
  setProjectPrompt: (prompt) => set({ projectPrompt: prompt }),
  setProjectType: (type) => set({ projectType: type }),
  setProjectModel: (model) => set({ projectModel: model }),
}));
