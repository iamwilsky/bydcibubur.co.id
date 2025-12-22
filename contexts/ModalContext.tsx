'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (modelName?: string) => void;
  closeModal: () => void;
  selectedModel: string;

  // Login Modal State
  isLoginOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  // Review Modal State
  isReviewOpen: boolean;
  openReviewModal: (modelName?: string) => void;
  closeReviewModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Lead/Offer Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  // Login Modal State
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Review Modal State
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const openModal = (modelName?: string) => {
    if (modelName) setSelectedModel(modelName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedModel(''), 300); // Clear after animation
  };

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openReviewModal = (modelName?: string) => {
    if (modelName) setSelectedModel(modelName);
    setIsReviewOpen(true);
  };

  const closeReviewModal = () => {
    setIsReviewOpen(false);
    setTimeout(() => setSelectedModel(''), 300);
  };

  return (
    <ModalContext.Provider value={{
      isOpen, openModal, closeModal, selectedModel,
      isLoginOpen, openLoginModal, closeLoginModal,
      isReviewOpen, openReviewModal, closeReviewModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
