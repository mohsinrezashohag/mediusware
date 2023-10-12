import React, { useState } from 'react'
import ModalA from './ModalA'
import ModalB from './ModalB'
import { useSearchParams } from 'react-router-dom'
import ModalC from './ModalC'

const Problem2 = () => {
  const [show, setShow] = useState()
  const [isEven, seIsEven] = useState(false)
  const [info, setInfo] = useState()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className='d-flex justify-content-center gap-3'>
          <button
            className='btn'
            style={{ backgroundColor: '#46139f' }}
            type='button'
            onClick={() => {
              setSearchParams({
                modal: 'one',
              })
              setShow('ModalA')
            }}
          >
            All Contacts
          </button>
          <button
            className='btn'
            type='button'
            style={{ background: '#ff7f50', color: '#000' }}
            onClick={() => {
              setSearchParams({
                modal: 'two',
              })
              setShow('ModalB')
            }}
          >
            US Contacts
          </button>
        </div>
      </div>
      <>
        <ModalA show={show === 'ModalA'} setShow={setShow} setInfo={setInfo} />
        <ModalB show={show === 'ModalB'} setShow={setShow} setInfo={setInfo} />
        <ModalC show={show === 'ModalC'} setShow={setShow} info={info} />
      </>
    </div>
  )
}

export default Problem2
