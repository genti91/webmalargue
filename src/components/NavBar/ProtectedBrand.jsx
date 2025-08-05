import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useFormProtection } from '../../context/FormContext';
import { ConfirmNavigationModal } from '../Errores/ConfirmNavigationModal';

export const ProtectedBrand = ({ to = '/', children, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState('');
  const { hasUnsavedChanges, formType, setFormInactive } = useFormProtection();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (hasUnsavedChanges) {
      setPendingNavigation(to);
      setShowModal(true);
    } else {
      navigate(to);
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
      <Navbar.Brand 
        as="div" 
        onClick={handleClick}
        style={{ cursor: 'pointer', marginLeft: '1em' }}
        {...props}
      >
        {children}
      </Navbar.Brand>
      <ConfirmNavigationModal
        show={showModal}
        onHide={handleCancelNavigation}
        onConfirm={handleConfirmNavigation}
        formType={formType}
      />
    </>
  );
};