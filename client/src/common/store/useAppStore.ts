import { create } from "zustand";

interface AppState {
  title: string;
  setTopBarTitle: (title: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  title: "",
  setTopBarTitle: (title) => set(() => ({ title })),
}));
