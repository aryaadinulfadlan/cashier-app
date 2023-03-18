import { create } from "zustand"

type AppStore = {
    totalAmounts: number,
    resetAmounts: () => void,
    increaseTotalAmounts: (sum: number) => void,
    decreaseTotalAmounts: (sum: number) => void,
}
const initialAmount = 0

const useAppStore = create<AppStore>()((set) => ({
    totalAmounts: initialAmount,
    resetAmounts: () => set(state => ({ ...state, totalAmounts: initialAmount })),
    increaseTotalAmounts: (sum: number) => set(state => ({ ...state, totalAmounts: state.totalAmounts + sum })),
    decreaseTotalAmounts: (sum: number) => set(state => ({ ...state, totalAmounts: state.totalAmounts - sum })),
}))

export default useAppStore;