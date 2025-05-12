import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'

export const ErrorAPI = ({email, id, error}) => {
    const sendEmail = () => {
        emailjs
            .send('service_lv636bu', 'template_v8q8x4j', {email, id, error}, 'fRtOuVBrm3PpHzBca')
    }
    return (
        <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
            <img src={`assets/icon-error.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
            <h2 className='tw-text-[#EB1C23] tw-text-[28px]'>Tenemos problemas para validar tu cotización</h2>
            <h3 className='tw-text-[#EB1C23] tw-text-[21px] tw-w-8/12'>Por favor, intentá nuevamente más tarde o contactanos si el problema persiste.</h3>
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
