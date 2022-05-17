import React, { useState } from 'react'
import { getTickets } from './services/getTickets'
import Spinner from 'react-bootstrap/Spinner'
import { Col, Container, Row } from 'react-bootstrap'

import './searchBox.scss'

export const SearchBox = ({ setTrackingData }) => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [emptyTraking, setEmptyTraking] = useState(false)

  const handleInputChange = (e) => setSearchValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      setEmptyTraking(false)
      setTrackingData([])
      const formatedSearchValue = searchValue.split('-')
      if (formatedSearchValue.length !== 3) {
        setError(true)
        setLoading(false)
        return
      }
      const data = await getTickets({
        documento: Number(formatedSearchValue[1]),
        origen: formatedSearchValue[2],
      })
      if (!data.length) setEmptyTraking(true)
      setTrackingData(data)

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('file: SearchBox.js ~ line 16 ~ handleSubmit ~ error', error)
    }
  }

  return (
    <>
      <form id='searchBox' className='d-flex' onSubmit={handleSubmit}>
        <Container>
          <Row>
            <input
              type='text'
              id='uname'
              name='name'
              className='form-control me-2'
              value={searchValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit} className={'btn btn-primary'}>
              Enviar
            </button>
          </Row>
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
        {emptyTraking && <p>Guía no encontrada</p>}
      </div>
    </>
  )
}
