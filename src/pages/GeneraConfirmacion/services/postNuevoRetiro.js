const { REACT_APP_API_KEY_CRM, REACT_APP_API_HOST } = process.env;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RETRIES = 4;
const DELAY = 1000;

const fetchWithRetry = async (url, options) => {
    for (let attempt = 0; attempt < RETRIES; attempt++) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (attempt < RETRIES - 1) {
                console.warn(`Intento ${attempt + 1} fallido. Reintentando en ${DELAY}ms...`);
                await sleep(DELAY);
            } else {
                console.error(`Todos los intentos fallaron:`, error);
                throw error;
            }
        }
    }
};

export const postNuevoRetiro = async (cotizacion, paymentId, remitente, destinatario) => {
    const url = `${REACT_APP_API_HOST}/?token=${REACT_APP_API_KEY_CRM}&o=nuevoRetiro`;

    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // TODO: formatear bien el json
        body: JSON.stringify({
            cotizacion,
            paymentId,
            remitente,
            destinatario,
        }),
    };

    return await fetchWithRetry(url, options);
};
