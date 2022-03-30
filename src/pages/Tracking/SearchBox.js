import React, { useState } from 'react'


export const SearchBox = ({setTrackingId, trackingSteps, trackingInput}) => {


    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = ( e ) => {
        setSearchValue( e.target.value )

    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        trackingSteps=[]

        setTrackingId(searchValue)

        // console.log(setTrackingId.searchValue)

    }



  return (
        <form
                className="d-flex"
                onSubmit= {handleSubmit} 
                
                >
                <div className="row">
                </div>
                    <input 
                    type="text" 
                    id="uname" 
                    name="name" 
                    className="form-control me-2"
                    value={searchValue}
                    onChange={ handleInputChange }
                    
                    />
                <div>
                    <button
                    onClick={handleSubmit}
                    className={'btn btn-primary'}
                    
                    >Enviar</button>
                </div>
        </form>
  )
}
