import { useState, useRef, useEffect } from 'react';
import './LocationSelect.scss'

const LocationSelect = ({locations, setInForm, name, placeholder, cp, form, errors, duplicateCP, setDuplicateCP, showLocations, setShowLocations}) => {

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [dropdownOptions, setDropdownOptions] = useState([])
  const [blur, setBlur] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const uniquePostalCodes = {};
  const duplicateCPlocal = [];

  useEffect(() => {
    if ((name === 'origin' || name === 'destiny') && showLocations[name + 'CP']) {
        let options = duplicateCP.filter((location) => location.codigoPostal == showLocations[name + 'CP'])
        if (options.length > 1) {
          setDropdownOptions(options)
          setDropdownVisible(true)
          setInForm( name, '')
          setInForm( name+'Id', '')
        }
      else{
        setDropdownVisible(false)
      }
    }
    if ((name === 'originCP' || name === 'destinyCP') && showLocations[name.slice(0, -2)]) {
      let options = duplicateCP.filter((location) => location.nombre == showLocations[name.slice(0, -2)])
      if (options.length > 1) {
        setDropdownOptions(options)
        setDropdownVisible(true)
      }
    else{
      setDropdownVisible(false)
    }
  } 
  }, [showLocations])

  const checkDuplicate = (location, duplicate) => {
    if (uniquePostalCodes[duplicate]) {
      duplicateCPlocal.push(location);
      return false;
    } else {
      uniquePostalCodes[duplicate] = true;
      duplicateCPlocal.push(location);
      return true;
    }
  }


  const handleSearchChange = (event) => {
    if (!locations) return
    const { value } = event.target
    setInForm( name, value)

    if (value.length > 0) {
      const filteredOptions = !cp ? locations
        .filter((location) => {
          if (!location.nombre.toLowerCase().includes(value.toLowerCase())) return false;
          return checkDuplicate(location, location.nombre);
        })
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .slice(0, 10) 
      :
        locations.filter((location) => {
          if (!location.codigoPostal.toString().includes(value)) return false;
          return checkDuplicate(location, location.codigoPostal.toString());
        })
        .slice(0, 10)
      setDuplicateCP(duplicateCPlocal)
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
    if (name.includes('CP')) {
      setShowLocations({[name]: option.codigoPostal})
      name = name.slice(0, -2);
    }else{
      setShowLocations({[name]: option.nombre})
    }
    setInForm( name + 'Option', option)
    setInForm( name, option.nombre)
    setInForm( name + 'Id', option.id)
    setInForm( name + 'CP', option.codigoPostal)
    setInForm( 'prov' + name.charAt(0).toUpperCase() + name.slice(1), option.provincia)
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
      if (dropdownRef.current && highlightedItem >= 0) {
        const itemElement = dropdownRef.current.children[highlightedItem];
        if (itemElement) {
          const itemTop = itemElement.offsetTop;
          const itemBottom = itemTop + itemElement.offsetHeight;
          const dropdownTop = dropdownRef.current.scrollTop;
          const dropdownBottom = dropdownTop + dropdownRef.current.offsetHeight;
          if (itemTop < dropdownTop) {
            dropdownRef.current.scrollTop = itemTop  - 30;
          } else if (itemBottom > dropdownBottom) {
            dropdownRef.current.scrollTop = itemBottom - dropdownRef.current.offsetHeight  + 30;
          }
        }
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
      <div id={name} className={`input_container ` + (blur && ((errors && errors[name] === 'Campo requerido') ? 'border_active_error' : 'border_active' ))}>
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
        <ul ref={dropdownRef} className="location_drop_down" style={dropdownOptions.length > 10 ? {overflowY: 'scroll'} : null}>
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
