import { create } from "zustand";

interface IState {
  count: number;
  inc: () => void;
}

export const useCountStore = create<IState>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
