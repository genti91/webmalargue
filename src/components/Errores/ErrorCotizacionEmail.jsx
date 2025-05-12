import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Warning } from './Warning'

export const ErrorCotizacionEmail = ({setError}) => {
    return (
        <>
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
                <img src={`assets/icon-no-cotizacion.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                <h2 className='tw-text-[28px]'>No encontramos una cotización vigente</h2>
                <h3 className='tw-text-[21px] tw-w-8/12'>Puede ser que el email que ingresaste no sea donde recibiste la cotización
                    o que la cotización ya no se encuentre vigente.</h3>
                <div className='lg:tw-ml-auto tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-20 tw-mt-5'>
                    <Button
                        className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
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
                            className='tw-w-[158px] tw-h-12 p-0'
                        >
                            Cotizar
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
