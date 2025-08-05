import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { WhatsAppChat } from '../WhatsAppChat/WhatsAppChat';

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <WhatsAppChat />
    </>
  );
};