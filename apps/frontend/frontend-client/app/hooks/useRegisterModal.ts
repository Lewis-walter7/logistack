import { create } from "zustand";

interface UseRegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useRegisterModal = create<UseRegisterModalProps>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
})); 


export default useRegisterModal;