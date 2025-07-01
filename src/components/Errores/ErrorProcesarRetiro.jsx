import { Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'

export const ErrorProcesarRetiro = ({emailBody}) => {
    const sendEmail = () => {
        emailjs
            .send('service_lv636bu', 'template_fv9qlga', emailBody, 'fRtOuVBrm3PpHzBca')
    }
    return (
        <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
            <img src={`/assets/icono-warning-retiro.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
            <h2 className='tw-text-[#FF9500] tw-font-[700] tw-text-[28px]'>Tuvimos un problema para procesar tu retiro</h2>
            <h3 className='tw-text-[#FF9500] tw-text-[21px] tw-w-8/12'>Contactanos para solucionarlo</h3>
            <div className='tw-w-full tw-justify-center tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-20 tw-mt-5'>
                <a
                    href='https://wa.me/5491163622778'
                    target='_blank'
                    rel='noreferrer'
                    className='tw-w-full md:tw-w-[158px]'
                >
                    <Button
                        className='md:tw-w-[158px] tw-w-full tw-h-12 p-0'
                        onClick={sendEmail}
                    >
                        Contactanos
                    </Button>
                </a>
            </div>
        </div>
    )
}
