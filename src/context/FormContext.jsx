import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormProtection = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormProtection must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }) => {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [formType, setFormType] = useState('');

  const setFormActive = (type = '') => {
    setHasUnsavedChanges(true);
    setFormType(type);
  };

  const setFormInactive = () => {
    setHasUnsavedChanges(false);
    setFormType('');
  };

  return (
    <FormContext.Provider value={{
      hasUnsavedChanges,
      formType,
      setFormActive,
      setFormInactive
    }}>
      {children}
    </FormContext.Provider>
  );
};