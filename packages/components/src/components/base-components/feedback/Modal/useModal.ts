import { useState, useCallback } from 'react';

// Utility hook to manage modal state
export function useModal(initialState = false) {
  const [isModalOpen, setIsOpen] = useState(initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return { isModalOpen, openModal, closeModal };
}
