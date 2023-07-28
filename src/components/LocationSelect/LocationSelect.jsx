import { useState } from 'react'
import './LocationSelect.scss'

const LocationSelect = ({locations, setInForm, name, placeholder, cp, form}) => {

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [blur, setBlur] = useState(false);

  const handleSearchChange = (event) => {
    if (!locations) return
    const { value } = event.target
    setInForm( name, value)

    if (value.length > 0) {
      const filteredOptions = !cp ? locations
        .filter((location) =>
          location.nombre.toLowerCase().includes(value.toLowerCase())
        )
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .slice(0, 10) :
        locations.filter((location) =>
          location.codigoPostal.toString().includes(value)
        )
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
    if (name === 'origin' || name === 'originCP') {
      setInForm( 'origin', option.nombre)
      setInForm( 'originId', option.id)
      setInForm( 'originCP', option.codigoPostal)
    } else {
      setInForm( 'destiny', option.nombre)
      setInForm( 'destinyId', option.id)
      setInForm( 'destinyCP', option.codigoPostal)
    }
    setDropdownVisible(false)
  };

  return (
    <div>
      <div className={`input_container ${blur && "border_active"}`}>
        <input
          className="input_container__field"
          type="text"
          value={form[name]}
          onChange={handleSearchChange}
          onFocus={() => setBlur(!blur)}
          onBlur={() => setBlur(false)}
          placeholder={placeholder}
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
              {cp ? option.codigoPostal : option.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSelect
