import { create } from "zustand";

interface UseLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useLoginModal = create<UseLoginModalProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({
        isOpen: true
    }),
    onClose: ()=> set({
        isOpen: false
    })
}))    

export default useLoginModal;