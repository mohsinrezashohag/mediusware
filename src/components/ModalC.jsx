import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'bootstrap'

const ModalC = ({ show, setShow, info }) => {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Button
          style={{ backgroundColor: '#46139f', color: '#fff' }}
          variant='secondary'
          onClick={() => setShow('modal_one')}
        >
          All Contacts
        </Button>
        <Button
          style={{ background: '#ff7f50', color: '#000' }}
          variant='primary'
          onClick={() => setShow('modal_two')}
        >
          US Contacts
        </Button>
        <Button
          variant='primary'
          onClick={() => setShow(null)}
          style={{
            background: '#fff',
            border: '1px solid #46139f',
            color: '#000',
          }}
        >
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <table className='table '>
          <thead>
            <tr>
              <th scope='col'>Phone</th>
              <th scope='col'>Country</th>
            </tr>
          </thead>
          <tbody>
            {info && (
              <tr>
                <td>{info.phone}</td>
                <td>{info.country.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  )
}

export default ModalC
