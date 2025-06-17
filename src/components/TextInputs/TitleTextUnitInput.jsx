export default function TitleTextUnitInput({
  unit = 'cm',
  title,
  input,
  setInput,
  mandatory = false,
  placeholder = 'Ingrese el campo',
  info = false,
  disabled = false,
  error = false,
  onKeyDown,
  name
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow empty value, numbers, and one decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInput(value);
    }
  };

  return (
    <div
      className={`tw-flex tw-flex-col tw-items-start tw-justify-start tw-gap-2 tw-w-full `}
    >
      <h2 className='tw-text-base tw-font-normal tw-text-[#2F3394] tw-mb-0'>
        {title}
        {mandatory && (
          <span className='tw-font-bold tw-text-[#EB1C23]'> *</span>
        )}
      </h2>
      <div className={`tw-rounded-lg tw-text-center tw-flex tw-items-stretch tw-w-full tw-border ${error ? "tw-border-[#EB1C23]" : "tw-border-[#2F3394]"}  focus:tw-outline-none tw-bg-[#FFFFFF]`}>
        <input
          name={name}
          type='text'
          inputMode='decimal'
          value={input}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          onFocus={() => {
            if (input === '') setInput('')
          }}
          placeholder={placeholder}
          className={` tw-placeholder-[#B3B3B3] focus:tw-outline-none tw-rounded-l-lg tw-py-2 tw-w-full tw-pl-4 tw-pr-2 ${
            disabled
              ? 'tw-bg-[#E9ECEF] tw-border-[#B2B2B2] tw-text-[#756C7D] tw-cursor-not-allowed'
              : 'tw-border-[#2F3394] tw-bg-[#FFFFFF]'
          }`}
          required={mandatory}
          aria-label={title}
          disabled={disabled}
        />
        <div className='tw-bg-[#2F3394] tw-rounded-r-lg tw-flex tw-items-center tw-self-stretch  tw-px-2'>
          <span className='tw-text-white tw-text-center'>{unit}</span>
        </div>
      </div>
      {typeof info === 'string' && (
        <span className='tw-text-[#2F3394] tw-w-fit tw-overflow-hidden tw-rounded-r-lg tw-flex tw-items-center tw-self-stretch'>
          {info}
        </span>
      )}
      {error && <span className='tw-text-[#EB1C23] tw-text-xs'>{error}</span>}
    </div>
  )
}
