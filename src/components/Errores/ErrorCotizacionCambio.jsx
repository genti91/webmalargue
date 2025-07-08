import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Warning } from './Warning'

export const ErrorCotizacionCambio = ({setError}) => {
    return (
        <>
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
                <img src={`assets/warning-azul.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                <h2 className='tw-text-[28px]'>El valor de tu cotización cambió</h2>
                <h3 className='tw-text-[21px]'>El valor de tu cotización fue actualizado. Podés regresar a la pantalla anterior e ingresar otro número de cotización o generar una nueva para continuar con tu retiro.</h3>
                <div className='tw-w-full tw-h-[1px] tw-bg-[#CAC4D0] tw-mt-5 tw-mb-5' />
                <div className='tw-flex-col md:tw-flex-row tw-flex tw-items-center tw-justify-center tw-gap-6 tw-text-center'>
                    <div className='tw-text-[21px] tw-text-[#6C757D] tw-font-[700]'>
                        <span className='tw-hidden md:tw-block'>Cotización N° 5446<br /></span>
                        Precio anterior: <span className='tw-font-[400]'>ARS 2.000</span>
                    </div>
                    <img src={`assets/arrow-right.png`} alt="icon" className="tw-rotate-90 md:tw-rotate-0 tw-transition-transform" />
                    <div className='tw-text-[21px] tw-text-[#2F3394] tw-font-[700]'>
                        <span className='tw-hidden md:tw-block'>Nueva cotización N° 5501  <br /></span>
                        Precio actualizado: <span className='tw-font-[400]'>ARS 3.000</span>
                    </div>
                </div>
                <div className='lg:tw-ml-auto tw-w-full tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-10 tw-mt-10 md:tw-justify-end tw-justify-center'>
                    <Button
                        className='sm:tw-w-[158px] tw-w-full tw-h-12 p-0 tw-bg-[#6C757D]'
                        style={{
                            backgroundColor: '#6C757D',
                            border: '1px solid #6C757D',
                        }}
                        onClick={() => setError({})}
                    >
                        Volver
                    </Button>
                    <Link to='/cotiza'>
                        <Button
                            className='sm:tw-w-[181px] tw-w-full tw-h-12 p-0'
                        >
                            Confirmar precio
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
