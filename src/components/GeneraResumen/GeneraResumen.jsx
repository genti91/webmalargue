import { Button } from 'react-bootstrap';
import { Warning } from '../Errores/Warning';
import { useGenera } from '../../context/GeneraContext';
import Accordion from '../Accordion/Accordion';
import TableComponent from '../TableComponent/TableComponent'

export const GeneraResumen = ({ setCurrentStep, cotizacion, datosRemitente, datosDestinatario }) => {
    const { setCotizacion } = useGenera();
    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentStep(2);
    }
    const items = [
        {
            header: 'Remitente',
            body: <div><span className="tw-font-bold">Nombre y apellido / Razón social:</span>  dato ingresado por el usuario</div>
        },
        {
            header: 'Destinatario',
            body: 'Body',
        },
        {
            header: 'Bultos',
            body: <TableComponent columns={[]} dataSource={[]} />,
        },
        {
            header: 'Observaciones',
            body: 'Body',
        },
        {
            header: 'Facturación',
            body: 'Body',
        },
        {
            header: 'Notificación',
            body: 'Body',
        },
        {
            header: 'Detalle de la tarifa',
            body: 'Body',
        }
    ];
    return (
        <div>
            <h2 className='tw-text-[#2F3394] tw-text-[28px] tw-mb-5'>Completá el formulario para solicitar el retiro</h2>
            <Warning boldText="Recordá que el valor es estimativo" text="ya que puede verse modificado al medir/pesar la mercadería en nuestro depósito." />
            <div className='tw-mt-8'>
                <form onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col tw-gap-9'>
                    <Accordion items={items} />
                    <div className='tw-self-center tw-w-full sm:tw-w-[347px] tw-border tw-border-[#707070] tw-rounded-lg'>
                        <div className='tw-font-semibold tw-text-xl tw-text-[#2F3394] tw-py-3 tw-text-center'>PRECIO FINAL</div>
                        <div className='tw-bg-[#2F3394] tw-rounded-b-lg tw-font-bold tw-py-3 tw-text-center tw-text-white tw-text-xl'>ARS {cotizacion.precioFinal}</div>
                    </div>
                    <div className='md:tw-ml-auto tw-flex tw-flex-col md:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mt-5'>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                            style={{
                                backgroundColor: '#6C757D',
                                border: '1px solid #6C757D',
                            }}
                            onClick={() => {
                                setCurrentStep(0);
                                setCotizacion(null);
                            }}
                        >
                            Volver
                        </Button>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0'
                            type='submit'
                        >
                            Continuar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
