import { useState, useRef, useEffect } from 'react'

export default function TitleTextInput({
  title,
  input,
  setInput,
  mandatory = false,
  disabled,
  placeholder = '',
  error = false,
  id,
  email,
  small,
  numeric = false,
  searchDropdown = false,
  searchOptions = [],
  onOptionSelect,
  zipCode = false,
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (searchDropdown) {
      const filtered = searchOptions
        .filter((option) => {
          if (zipCode) {
            // For postal codes, filter by codigoPostal and exclude codes less than 1000
            return (
              (!input || option.codigoPostal.toString().includes(input)) &&
              option.codigoPostal >= 1000
            )
          } else {
            // For locations, filter by nombre
            return (
              !input ||
              option.nombre.toLowerCase().includes(input.toLowerCase())
            )
          }
        })
        .sort((a, b) => {
          if (zipCode) {
            // Sort postal codes numerically
            return a.codigoPostal - b.codigoPostal
          } else {
            // Sort locations alphabetically
            return a.nombre.localeCompare(b.nombre)
          }
        })
        .slice(0, 10)
      setFilteredOptions(filtered)
    }
  }, [input, searchOptions, searchDropdown, zipCode])

  const handleKeyDown = (e) => {
    if (!isFocused || !searchDropdown) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) => (prev > -1 ? prev - 1 : prev))
    } else if (
      (e.key === 'Enter' || e.key === 'Tab') &&
      highlightedIndex >= 0
    ) {
      e.preventDefault()
      handleOptionSelect(filteredOptions[highlightedIndex])
    }

    // Scroll handling
    if (dropdownRef.current && highlightedIndex >= 0) {
      const itemElement = dropdownRef.current.children[highlightedIndex]
      if (itemElement) {
        const itemTop = itemElement.offsetTop
        const itemBottom = itemTop + itemElement.offsetHeight
        const dropdownTop = dropdownRef.current.scrollTop
        const dropdownBottom = dropdownTop + dropdownRef.current.offsetHeight

        if (itemTop < dropdownTop) {
          dropdownRef.current.scrollTop = itemTop - 30
        } else if (itemBottom > dropdownBottom) {
          dropdownRef.current.scrollTop =
            itemBottom - dropdownRef.current.offsetHeight + 30
        }
      }
    }
  }

  const handleOptionSelect = (option) => {
    // First update the input value
    setInput(option.nombre)

    // Then call the onOptionSelect callback if provided
    if (onOptionSelect) {
      onOptionSelect(option)
    }

    // Finally close the dropdown and reset highlight
    setIsFocused(false)
    setHighlightedIndex(-1)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the input and the dropdown
      if (
        inputRef.current && !inputRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setIsFocused(false);
        setHighlightedIndex(-1);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div
      className={`tw-flex tw-flex-col tw-items-start tw-justify-start tw-gap-2 tw-w-full ${
        small && 'md:tw-max-w-[158px]'
      }`}
    >
      <h2 className='tw-text-base tw-font-normal tw-text-[#2F3394] tw-mb-0'>
        {title}
        {mandatory && (
          <span className='tw-font-bold tw-text-[#EB1C23]'> *</span>
        )}
      </h2>
      <div className='tw-relative tw-w-full'>
        <input
          ref={inputRef}
          id={id}
          disabled={disabled}
          type={email ? 'email' : numeric ? 'number' : 'text'}
          inputMode={numeric ? 'decimal' : 'text'}
          value={input}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          required={mandatory}
          aria-label={title}
          onChange={(e) => {
            const value = e.target.value
              setInput(value)
          }}
          onFocus={() => {
            setIsFocused(true)
            if (input === "") setInput(input)
            // Optionally pre-filter/sort options on focus if input is empty
            if (searchDropdown && searchOptions.length > 0 && !input) {
               setFilteredOptions(
                 searchOptions
                   .sort((a, b) => {
                     if (zipCode) {
                       return a.codigoPostal - b.codigoPostal
                     } else {
                       return a.nombre.localeCompare(b.nombre)
                     }
                   })
                   .slice(0, 10)
               );
            }
          }}
          onBlur={(e) => {
            // Use a small timeout to allow relatedTarget to be set before checking.
            // This prevents the dropdown from closing immediately when clicking an option.
            setTimeout(() => {
               // Check if the focus is moving to an element inside the dropdown.
               // If it is, do nothing, allowing the click handler on the option to fire.
               if (dropdownRef.current && dropdownRef.current.contains(e.relatedTarget)) {
                 return;
               }
               // If focus is moving elsewhere (e.g., tabbing to the next input or clicking outside),
               // close the dropdown.
               setIsFocused(false);
               setHighlightedIndex(-1);
            }, 10); // A short delay is usually sufficient
          }}
          className={`tw-border  tw-placeholder-[#B3B3B3] tw-rounded-lg tw-p-2 tw-w-full focus:tw-outline-none tw-px-4 ${
            error ? 'tw-border-[#EB1C23]' : 'tw-border-[#2F3394]'
          } ${
            disabled
              ? 'tw-bg-[#E9ECEF] tw-border-[#B2B2B2] tw-text-[#756C7D] tw-cursor-not-allowed'
              : 'tw-border-[#2F3394] tw-bg-[#FFFFFF]'
          }`}
        />
        {isFocused && searchDropdown && filteredOptions.length > 0 && (
          <ul
            ref={dropdownRef}
            className='tw-absolute tw-pl-1 tw-z-10 tw-w-full tw-mt-1 tw-bg-white tw-border tw-border-[#2F3394] tw-rounded-lg tw-max-h-60 tw-overflow-auto'
            onMouseDown={(e) => e.preventDefault()} // Prevent input blur when clicking dropdown options
          >
            {filteredOptions.map((option, index) => (
              <li
                key={option.id}
                className={`tw-px tw-py-2 tw-cursor-pointer hover:tw-bg-gray-100 ${
                  index === highlightedIndex ? 'tw-bg-gray-100' : ''
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {zipCode ? option.codigoPostal : option.nombre}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <span className='tw-text-[#EB1C23] tw-text-xs'>{error}</span>}
    </div>
  )
}
