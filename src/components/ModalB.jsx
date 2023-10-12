import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const ModalB = ({ show, setShow, setInfo }) => {
  const [allContacts, setAllContacts] = useState([])
  const [isEven, setIsEven] = useState(false)
  const [searchText, setSearchText] = useState('')

  // all contacts
  useEffect(() => {
    fetch(
      'https://contact.mediusware.com/api/country-contacts/united%20states/'
    )
      .then((res) => res.json())
      .then((data) => setAllContacts(data.results))
  }, [])

  const ourData = allContacts.filter((item) => {
    const isEvenCondition = isEven ? item.phone[1] % 2 === 0 : true
    const searchTextCondition = searchText
      ? item.phone.includes(searchText)
      : true

    return isEvenCondition && searchTextCondition
  })

  // search box handle
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <Modal show={show}>
      <Modal.Header>
        <Form.Label>Only even</Form.Label>
        <Form.Check
          checked={isEven}
          aria-label='Only even'
          onClick={() => setIsEven((prev) => !prev)}
        />
        <Button
          variant='secondary'
          style={{ backgroundColor: '#46139f', color: '#fff' }}
          onClick={() => setShow('modal_one')}
        >
          All Contacts
        </Button>
        <Button
          variant='primary'
          onClick={() => setShow('modal_two')}
          style={{ background: '#ff7f50', color: '#000' }}
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
        <div className='mb-3'>
          <input
            type='text'
            onChange={handleChange}
            placeholder='search by phone'
          />
        </div>
        <div className='d-flex justify-content-between'>
          <div>id</div>
          <div>Contact</div>
          <div>Country</div>
          <div>See details</div>
        </div>
        <div>
          {ourData?.map((item) => (
            <div
              className='d-flex justify-content-between'
              onClick={() => {
                setShow('modal_three')
                setInfo(item)
              }}
            >
              <div>{item.id}</div>
              <div>{item.phone}</div>
              <div>{item.country.name}</div>
              <Button
                style={{ marginTop: '2px' }}
                onClick={() => {
                  setShow('modal_three')
                  setInfo(item)
                }}
              >
                see details
              </Button>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalB
