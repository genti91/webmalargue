import React, { createContext, useContext, useState } from 'react';

const GeneraContext = createContext(undefined);

export const GeneraProvider = ({ children }) => {
    const [cotizacion, setCotizacion] = useState({});

    return (
        <GeneraContext.Provider value={{ cotizacion, setCotizacion }}>
            {children}
        </GeneraContext.Provider>
    );
};

export const useGenera = () => {
    const context = useContext(GeneraContext);
    if (!context) throw new Error('useGenera must be used within a GeneraProvider');
    return context;
};
