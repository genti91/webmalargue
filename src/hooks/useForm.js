import { useState, useCallback } from 'react';
import isEqual from 'lodash/isEqual';
import set from 'lodash/fp/set';

function useForm(initialState, onSubmit) {
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback((event) => {
    event.persist();
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setForm(prev => set(name, val, prev)); // inmutable
  }, []);

  const resetForm = useCallback(() => {
    if (!isEqual(initialState, form)) {
      setForm(initialState);
    }
  }, [form, initialState]);

  const setInForm = useCallback((name, value) => {
    setForm(prev => set(name, value, prev)); // inmutable
  }, []);

  const handleSubmit = useCallback((event) => {
    if (event) event.preventDefault();
    onSubmit?.();
  }, [onSubmit]);

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
    setForm,
    setInForm,
  };
}

export default useForm;
