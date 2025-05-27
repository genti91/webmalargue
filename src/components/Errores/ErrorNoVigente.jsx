import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'

export const ErrorNoVigente = ({ email, id, fecha }) => {
    function formatFecha(fechaStr) {
        const fecha = new Date(fechaStr);
        if (isNaN(fecha)) return null;
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const anio = fecha.getFullYear();
        return `${dia}/${mes}/${anio}`;
    }
    let tituloEmail = `Cotización N° ${id} fuera de vigencia`
    let descripcionEmail = `El usuario quiere solicitar el retiro sobre la cotización N° ${id} con fecha de emisión ${formatFecha(fecha)} y la misma ya se encuentra fuera de vigencia (7 días hábiles)` 
    const sendEmail = () => {
        emailjs
            .send('service_lv636bu', 'template_borvbgd', { titulo:tituloEmail, email, id, descripcion:descripcionEmail }, 'fRtOuVBrm3PpHzBca')
    }
    return (
        <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
            <img src={`assets/icon-error.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
            <h2 className='tw-text-[#EB1C23] tw-text-[28px]'>Tu cotización ya no se encuentra vigente</h2>
            <h3 className='tw-text-[#EB1C23] tw-text-[21px] tw-w-8/12'>Las cotizaciones vencen después de 7 días hábiles. Por favor, generá una nueva para continuar.</h3>
            <div className='tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-20 tw-mt-5'>
                <a
                    href='https://wa.me/5491163622778'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button
                        className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                        style={{
                            backgroundColor: '#6C757D',
                            border: '1px solid #6C757D',
                        }}
                        onClick={sendEmail}
                    >
                        Contactanos
                    </Button>
                </a>
                <Link to='/cotiza'>
                    <Button
                        className='tw-w-[158px] tw-h-12 p-0'
                    >
                        Cotizar
                    </Button>
                </Link>
            </div>
        </div>
    )
}
