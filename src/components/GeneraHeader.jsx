const GeneraHeader = ({ selectedIndex }) => {
    return (
        <div 
            className='tw-flex tw-border-[#CFD6DC] tw-border-[1px] tw-rounded-md tw-py-4 tw-justify-center tw-h-[72px] tw-items-center tw-overflow-visible'
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
            {['Remitente', 'Destinatario', 'Resumen', 'Pago', 'Confirmación'].map((item, index) => {
                const isSelected = index === selectedIndex;
                const isCompleted = index < selectedIndex;

                const visibilityClass = isSelected ? 'tw-flex' : 'tw-hidden md:tw-flex';
                const smallWithClass = item === 'Pago' ? 'tw-w-[170px]' : 'tw-w-[200px]';

                return (
                    <div
                        key={index}
                        className={
                            `${visibilityClass} tw-text-[#ABB7C2] lg:tw-w-[215px] ${smallWithClass} tw-text-base tw-flex tw-items-center tw-place-content-center tw-gap-1 lg:tw-gap-4 ` +
                            (isSelected ? 'tw-bg-[#2F3394] tw-h-[100px] tw-rounded-md tw-text-white' : '')
                        }
                    >
                        {isCompleted ? (
                            <div className="tw-h-10 tw-w-10 tw-bg-[#2F3394] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                                <img src="/assets/icon-done.png" alt="icon" />
                            </div>
                        ) : (
                            <div className={
                                "tw-text-center tw-border-[1px] tw-border-[#ABB7C2] tw-p-2 tw-rounded-full tw-h-10 tw-w-10 " +
                                (isSelected ? 'tw-font-bold' : '')
                            }>
                                0{index + 1}
                            </div>
                        )}

                        <span className={
                            "tw-self-center " +
                            (isSelected ? 'tw-font-bold ' : '') +
                            (isCompleted ? 'tw-text-[#2F3394]' : '')
                        }>
                            {item}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default GeneraHeader;
