import { useState } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FormTenesCotizacion = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div id='tenes-cotizacion' className='tw-flex tw-flex-col tw-pb-14'>
            <h2>¿Ya tenes una cotización?</h2>
            <div className='tw-flex tw-items-center tw-gap-7'>
                <span className='tw-flex tw-items-center tw-gap-2'>
                    <input
                        type='radio'
                        name='cotizacion'
                        id='cotizacion-si'
                        value='si'
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='cotizacion-si'
                        className="tw-text-[#2F3394] tw-text-xl"
                    >
                        Sí
                    </label>
                </span>
                <span className='tw-flex tw-items-center tw-gap-2'>
                    <input
                        type='radio'
                        name='cotizacion'
                        id='cotizacion-no'
                        value='no'
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='cotizacion-no'
                        className="tw-text-[#2F3394] tw-text-xl"
                    >
                        No
                    </label>
                </span>
            </div>
            {selectedOption === 'si' &&
                <div>

                </div>
            }
            {selectedOption === 'no' &&
                <div className='tw-self-end'>
                    <Link to='/cotiza'>
                    <Button
                        className='tw-w-[158px] tw-h-12 p-0'
                    >
                       Cotizar 
                    </Button>
                    </Link>
                </div>
            }
        </div>
    );
};
