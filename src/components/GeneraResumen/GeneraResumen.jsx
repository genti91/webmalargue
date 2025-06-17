import { Button } from 'react-bootstrap';
import { Warning } from '../Errores/Warning';
import Accordion from '../Accordion/Accordion';
import TableComponent from '../TableComponent/TableComponent'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput';
import TitleTextInput from '../TextInputs/TitleTextInput';
import ModalConfirmarPago from '../ModalConfirmarPago/ModalConfirmarPago';
import { useState } from 'react';

export const GeneraResumen = ({ setCurrentStep, cotizacion, datosRemitente, datosDestinatario }) => {
    const [show, setShow] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    }
    const items = [
        {
            header: 'Remitente',
            body: <RemitenteDestinatarioData datos={datosRemitente} datosCoti={cotizacion.remitente} />
        },
        {
            header: 'Destinatario',
            body: <RemitenteDestinatarioData datos={datosDestinatario} datosCoti={cotizacion.destinatario} />
        },
        {
            header: 'Bultos',
            body: <BultosData data={cotizacion.bultos} />
        },
        {
            header: 'Observaciones',
            body: <div>
                    <span className="tw-font-bold">Observaciones:</span>{" "}
                    {datosDestinatario.observaciones
                        ? datosDestinatario.observaciones
                        : "No ingresaste ninguna observación"}
                </div>
        },
        {
            header: 'Facturación',
            body:
                <div className='tw-flex tw-flex-col tw-gap-2'>
                    <div><span className="tw-font-bold">Factura a nombre de:</span> {datosDestinatario.factura_a_nombre_de.label}</div>
                    <div><span className="tw-font-bold">Tipo de contribuyente:</span> {datosDestinatario.tipo_de_contribuyente}</div>
                </div>
        },
        {
            header: 'Notificación',
            body: (
                <div>
                    <span className="tw-font-bold">Persona que recibirá la confirmación del retiro:</span>{" "}
                    {datosDestinatario.notificacion.value === 'Remitente'
                        ? `Remitente (${datosRemitente.email})`
                        : `Remitente (${datosRemitente.email}) y Destinatario (${datosDestinatario.email})`
                    }
                </div>
            )
        }
    ];
    return (
        <div>
            <ModalConfirmarPago show={show} setShow={setShow} cotizacion={cotizacion.precioFinal} id={cotizacion.id} /> 
            <h2 className='tw-text-[#2F3394] tw-text-[28px] tw-mb-5'>Corroborá que la información sea correcta</h2>
            <Warning boldText="Recordá que el valor es estimativo" text="ya que puede verse modificado al medir/pesar la mercadería en nuestro depósito." />
            <div className='tw-mt-8'>
                <form onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col tw-gap-9'>
                    <Accordion items={items} defaultActiveKey={"0"} />
                    <div className='tw-w-[98%] tw-h-[1px] tw-bg-[#CAC4D0] tw-self-center'/>
                    <div className='tw-flex tw-flex-col tw-gap-2'>
                        <h3 className='tw-text-[#2F3394] tw-font-[600] tw-text-[24px]'>Detalle de la tarifa</h3>
                        <div className='tw-flex tw-flex-col tw-gap-2'>
                            <div><span className="tw-font-bold">Precio sin impuestos nacionales:</span> ARS {cotizacion.valorOriginal}</div>
                            <div><span className="tw-font-bold">Seguro:</span> ARS {cotizacion.seguro}</div>
                            <div><span className="tw-font-bold">IVA (21%):</span> ARS {cotizacion.iva}</div>
                        </div>
                    </div>
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
                                setCurrentStep(1);
                            }}
                        >
                            Volver
                        </Button>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0'
                            type='submit'
                        >
                            Realizar pago
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}


const RemitenteDestinatarioData = ({ datos, datosCoti }) => {
    return (
        <div className='tw-flex tw-flex-col tw-gap-2'>
            <div><span className="tw-font-bold">Nombre y apellido / Razón social:</span> {datos.nombre}</div>
            <div><span className="tw-font-bold">Email:</span> {datos.email}</div>
            <div><span className="tw-font-bold">CUIT / DNI:</span> {datos.tipo_documento.value} {datos.numero_documento}</div>
            <div><span className="tw-font-bold">Teléfono:</span> {datos.codigo_de_area} {datos.telefono}</div>
            <div>
            <span className="tw-font-bold">Dirección:</span>{" "}
            {[
                datos.calle,
                datos.numero,
                datos.piso,
                datos.dpto,
                datosCoti.localidad,
                datosCoti.provincia,
                datosCoti.cp ? `CP ${datosCoti.cp}` : null
            ]
                .filter(Boolean)
                .join(', ')}
            </div>
        </div>
    )
}

const BultosData = ({ data }) => {
    return (
        <div className='tw-mt-[-15px]'>
            <TableComponent 
                columns={{
                    cantBultos: 'Cantidad de bultos',
                    peso: 'Peso unitario (kg)',
                    ancho: 'Ancho unitario (cm)',
                    alto: 'Alto unitario (cm)',
                    profundidad: 'Largo unitario (cm)',
                }} 
                dataSource={data.bultos} 
            />
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-start tw-gap-9 tw-w-full tw-mt-6">
                <div className="md:tw-w-[43%] tw-w-full">
                    <TitleTextUnitInput
                        title="Valor declarado total"
                        unit="$"
                        placeholder="Ej.: 10000"
                        mandatory
                        input={data.valorDeclarado}
                        disabled
                    />
                </div>
                <div className="tw-w-full">
                    <TitleTextInput
                        title="Descripción de los bultos"
                        placeholder="Indicá la descripción de los bultos"
                        mandatory
                        input={data.descripcion}
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}
