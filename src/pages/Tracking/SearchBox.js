import React, { useState, useEffect } from 'react'
import { getTickets } from './services/getTickets'
import Spinner from 'react-bootstrap/Spinner'
import { Container } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

import './searchBox.scss'
import { useWindowSize } from '../../hooks/useWindowSize'

export const SearchBox = ({ setTrackingData }) => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emptyTracking, setEmptyTracking] = useState(false)
  const [searchParams] = useSearchParams()
  const { width } = useWindowSize()

  const formatSearchValue = (value) => {
    // Remover caracteres no numéricos excepto letras (para el origen)
    value = value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()
  
    // Tomar los primeros 4 caracteres
    const firstPart = value.slice(0, 4)
    // Tomar los siguientes 12 caracteres
    const secondPart = value.slice(4, 16)
    // Tomar el último carácter (origen)
    const thirdPart = value.slice(16, 17)
  
    // Formatear el string si tiene partes válidas
    if (secondPart.length > 0 && thirdPart.length > 0) {
      return `${firstPart}-${secondPart}-${thirdPart}`
    } else if (secondPart.length > 0) {
      return `${firstPart}-${secondPart}`
    } else {
      return firstPart
    }
  }
  
  const handleInputChange = (e) => {
    const formattedValue = formatSearchValue(e.target.value)
    setSearchValue(formattedValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      setEmptyTracking(false)
      setTrackingData([])
      let documento, origen
      if (!searchValue.includes('-')) {
        if (searchValue.length !== 17) {
          setError(true)
          setLoading(false)
          return
        }
        documento = Number(searchValue.slice(4, 16))
        origen = searchValue.slice(searchValue.length - 1, searchValue.length)
      } else {
        const formatedSearchValue = searchValue.split('-')
        if (formatedSearchValue.length !== 3) {
          setError(true)
          setLoading(false)
          return
        }
        documento = Number(formatedSearchValue[1])
        origen = formatedSearchValue[2]
      }
      const data = await getTickets({ documento, origen })
      if (!data.length) setEmptyTracking(true)
      setTrackingData(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('file: SearchBox.js ~ line 46 ~ handleSubmit ~ error', error)
    }
  }

  useEffect(() => {
    if (searchParams.get('tracking') !== null) {
      setSearchValue(searchParams.get('tracking'))
      const fetchTracking = async () => {
        try {
          setLoading(true)
          setError(false)
          setEmptyTracking(false)
          setTrackingData([])
          let documento, origen
          if (!searchValue.includes('-')) {
            if (searchValue.length !== 17) {
              setError(true)
              setLoading(false)
              return
            }
            documento = Number(searchValue.slice(4, 16))
            origen = searchValue.slice(
              searchValue.length - 1,
              searchValue.length
            )
          } else {
            const formatedSearchValue = searchValue.split('-')
            if (formatedSearchValue.length !== 3) {
              setError(true)
              setLoading(false)
              return
            }
            documento = Number(formatedSearchValue[1])
            origen = formatedSearchValue[2]
          }
          const data = await getTickets({ documento, origen })
          if (!data.length) setEmptyTracking(true)
          setTrackingData(data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(
            'file: SearchBox.js ~ line 46 ~ handleSubmit ~ error',
            error
          )
        }
      }
      fetchTracking()
    }
  }, [searchParams, searchValue, setTrackingData])

  return (
    <>
      <form id='searchBox' className='d-flex' onSubmit={handleSubmit}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type='text'
              id='uname'
              name='name'
              className='form-control me-2'
              placeholder='XXXX-XXXXXXXXXXXX-U'
              value={searchValue}
              onChange={handleInputChange}
              style={{ fontSize: width < 400 && ".8rem" }}
            />
            <button onClick={handleSubmit} style={{ fontSize: width < 430 && ".8rem" }} className={'btn btn-primary'}>
              Buscar
            </button>
          </div>
        </Container>
      </form>
      <div className='row justify-content-center mb-5'>
        {loading && (
          <Spinner animation='border' role='status' variant='primary'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}
        {error && (
          <p style={{ color: 'red' }}>El código de seguimiento es incorrecto</p>
        )}
        {emptyTracking && <p>Guía no encontrada</p>}
      </div>
    </>
  )
}
