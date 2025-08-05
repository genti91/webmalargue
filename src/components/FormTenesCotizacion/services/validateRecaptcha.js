const { REACT_APP_MP_API_HOST } = process.env;

export const validateRecaptchaToken = async (token) => {
    try {
        const response = await fetch(
            `${REACT_APP_MP_API_HOST}/api/recaptcha/validate`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            }
        );

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || 'Error de validación');
        }
        
        return result;
    } catch (error) {
        console.error('Error validating reCAPTCHA:', error);
        return { 
            valid: false, 
            error: error.message || 'Error de red al validar reCAPTCHA' 
        };
    }
};