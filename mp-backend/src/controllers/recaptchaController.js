export const validateRecaptcha = async (req, res) => {
    const { token } = req.body;
    
    if (!token) {
        return res.status(400).json({
            valid: false,
            error: 'Token de reCAPTCHA requerido'
        });
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        
        if (!secretKey) {
            console.error('RECAPTCHA_SECRET_KEY no está configurada');
            return res.status(500).json({
                valid: false,
                error: 'Configuración de reCAPTCHA faltante'
            });
        }

        const verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
        
        const response = await fetch(verifyURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`
        });

        const data = await response.json();

        if (data.success) {
            res.json({
                valid: true,
                challenge_ts: data.challenge_ts,
                hostname: data.hostname
            });
        } else {
            console.warn('reCAPTCHA validation failed:', data['error-codes']);
            res.status(400).json({
                valid: false,
                error: 'Token de reCAPTCHA inválido',
                errorCodes: data['error-codes'] || []
            });
        }

    } catch (error) {
        console.error('Error validando reCAPTCHA:', error);
        res.status(500).json({
            valid: false,
            error: 'Error interno del servidor al validar reCAPTCHA'
        });
    }
};