import { useState } from 'react'
import './LocationSelect.scss'

const LocationSelect = ({locations, setInForm, name}) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [blur, setBlur] = useState(false);

  const handleSearchChange = (event) => {
    if (!locations) return
    const { value } = event.target
    setSearchQuery(value)

    if (value.length > 0) {
      const filteredOptions = locations
        .filter((location) =>
          location.nombre.toLowerCase().startsWith(value.toLowerCase())
        )
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .slice(0, 10)
      setDropdownOptions(filteredOptions)
      if (filteredOptions.length === 0) {
        setDropdownVisible(false)
      }else{
        setDropdownVisible(true)
      }
    } else {
      setDropdownVisible(false)
    }
  };

  const handleOptionClick = (option) => {
    setInForm( name, option.id)
    if (name === 'origin') {
      setInForm('originCP', option.codigoPostal)
    } else {
       setInForm('destinyCP', option.codigoPostal)
    }
    setSearchQuery(option.nombre)
    setDropdownVisible(false)
  };

  return (
    <div>
      <div className={`input_container ${blur && "border_active"}`}>
        <input
          className="input_container__field"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setBlur(!blur)}
          onBlur={() => setBlur(false)}
        />

      </div>
      {dropdownVisible && (
        <ul className="location_drop_down">
          {dropdownOptions.map((option) => (
            <li
              className="location_drop_down_item"
              key={option.id}
              onClick={() => handleOptionClick(option)}
            >
              {option.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSelect
