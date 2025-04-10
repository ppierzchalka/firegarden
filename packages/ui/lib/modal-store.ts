import { create } from "zustand";

type ModalType = "bio" | "experience" | "interests" | null;

interface ModalState {
	activeModal: ModalType;
	openModal: (modal: ModalType) => void;
	closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
	activeModal: null,
	openModal: (modal) => set({ activeModal: modal }),
	closeModal: () => set({ activeModal: null }),
}));
