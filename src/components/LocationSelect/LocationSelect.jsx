import { useState, useRef, useEffect } from 'react';
import './LocationSelect.scss'

const LocationSelect = ({locations, setInForm, name, placeholder, cp, form, errors}) => {

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [blur, setBlur] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(-1);
  const inputRef = useRef(null);

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
    setHighlightedItem(-1);
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
    setHighlightedItem(-1);
  };

  const handleKeyDown = (e) => {
    if (dropdownVisible) {
      if (e.keyCode === 40) { //down
        e.preventDefault();
        setHighlightedItem((prevItem) => Math.min(prevItem + 1, dropdownOptions.length - 1));
      } else if (e.keyCode === 38) { //up
        e.preventDefault();
        setHighlightedItem((prevItem) => Math.max(prevItem - 1, -1));
      } else if (e.keyCode === 13 && highlightedItem >= 0) { //enter
        e.preventDefault();
        handleOptionClick(dropdownOptions[highlightedItem]);
      }
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      inputRef.current.focus();
    }else{
      setHighlightedItem(-1);
    }
  }, [dropdownVisible]);

  return (
    <div>
      <div className={`input_container ` + (blur && ((errors && errors[name] === 'Campo requerido') ? 'border_active_error' : 'border_active' ))}>
        <input
          ref={inputRef}
          className={"input_container__field " + ((errors && errors[name] === 'Campo requerido') &&  "input_container__field_error")}
          type="text"
          value={form[name]}
          onChange={handleSearchChange}
          onFocus={() => setBlur(!blur)}
          onBlur={() => setBlur(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />

      </div>
      {dropdownVisible && (
        <ul className="location_drop_down">
          {dropdownOptions.map((option, index) => (
            <li
              className={`location_drop_down_item ${index === highlightedItem ? 'highlighted' : ''}`}
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
