export const Warning = ({ boldText, text }) => {
    return (
        <div style={{
            background: '#e3f0ff',
            color: '#2f3394',
            borderRadius: '4px',
            border: '1px solid #B6D4FE',
            padding: '16px',
            display: 'flex',
            fontWeight: 500,
            width: '100%'
        }}>
            <span className="tw-flex tw-items-center tw-gap-2">
                <img src={`assets/icon-warning.png`} alt="icon" className="tw-h-5 tw-w-5" />
                <span>
                    <b>{boldText}</b> {text}
                </span>
            </span>
        </div>
    )
}
