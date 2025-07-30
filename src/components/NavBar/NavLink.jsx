import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormProtection } from '../../context/FormContext';
import { ConfirmNavigationModal } from '../Errores/ConfirmNavigationModal';

export const ProtectedNavLink = ({ to, children, className, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState('');
  const { hasUnsavedChanges, formType, setFormInactive } = useFormProtection();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (hasUnsavedChanges) {
      e.preventDefault();
      setPendingNavigation(to);
      setShowModal(true);
    }
  };

  const handleConfirmNavigation = () => {
    setFormInactive();
    setShowModal(false);
    navigate(pendingNavigation);
  };

  const handleCancelNavigation = () => {
    setShowModal(false);
    setPendingNavigation('');
  };

  return (
    <>
      <NavLink 
        to={to} 
        onClick={handleClick} 
        className={className}
        {...props}
      >
        {children}
      </NavLink>
      <ConfirmNavigationModal
        show={showModal}
        onHide={handleCancelNavigation}
        onConfirm={handleConfirmNavigation}
        formType={formType}
      />
    </>
  );
};