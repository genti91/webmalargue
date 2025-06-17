import { useEffect } from 'react'

export default function TitleSelectInput({
  title,
  input,
  setInput,
  mandatory = false,
  placeholder = 'Seleccione una opción',
  options = [],
  error = false,
  small,
  id,
  showLocations,
  setShowLocations,
  name,
  disabled = false,
}) {
  useEffect(() => {
    if (showLocations?.[name]) {
      const matchingOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(showLocations[name].toLowerCase())
      )
      if (matchingOptions.length > 1) {
        // Handle multiple matches if needed
      }
    }
  }, [showLocations, name, options])

  const handleOptionSelect = (option) => {
    if (setShowLocations) {
      setShowLocations({ [name]: option.label })
    }
    setInput(option)
  }

  return (
    <div
      className={`tw-flex tw-flex-col tw-items-start tw-gap-2 tw-w-full  ${
        small && 'md:tw-max-w-[158px]'
      }`}
    >
      <h2 className='tw-text-base tw-font-normal tw-text-[#2F3394] tw-mb-0'>
        {title}
        {mandatory && (
          <span className='tw-font-bold tw-text-[#EB1C23]'> *</span>
        )}
      </h2>

      <select
        id={id}
        value={input?.value || ''}
        onChange={(e) => {
          const selectedOption = options.find(
            (opt) => opt.value === e.target.value
          )
          handleOptionSelect(selectedOption)
        }}
        className={`tw-border ${
          error ? 'tw-border-[#EB1C23]' : 'tw-border-[#2F3394]'
        } tw-placeholder-[#B3B3B3] tw-rounded-lg tw-p-2 tw-w-full focus:tw-outline-none tw-bg-[#FFFFFF] tw-px-4 
                ${
                  disabled
                    ? 'tw-bg-[#E9ECEF] tw-border-[#B2B2B2] tw-text-[#756C7D] tw-cursor-not-allowed'
                    : 'tw-border-[#2F3394] tw-bg-[#FFFFFF] tw-cursor-pointer'
                }
        `}
        required={mandatory}
        aria-label={title}
        disabled={disabled}
      >
        <option value='' hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className='tw-text-[#EB1C23] tw-text-xs'>{error}</span>}
    </div>
  )
}
