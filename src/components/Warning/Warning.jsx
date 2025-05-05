export const Warning = ({boldText, text}) => {
  return (
    <div style={{
      background: '#e3f0ff',
      color: '#2f3394',
      borderRadius: '4px',
      border: '1px solid #B6D4FE',
      padding: '16px',
      display: 'flex',
      fontWeight: 500
    }}>
      <span>
        <img src={`assets/icon-warning.png`} alt="icon" style={{marginRight: '6px'}} />
        <b>{boldText}</b> {text}
      </span>
    </div>
  )
}
