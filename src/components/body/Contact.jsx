import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import title from '../../data/title'
const Contact = () => {
  
    document.title = title + 'Contact'
  const [formDetails, setFormDetails] = useState({
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: '',
  })
  function handleInputChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 
    const name = e.target.name;
    setFormDetails({
      ...formDetails,
      [name]:value
    })
    
  }
  function handleSubmit(e) {
    console.log(formDetails)
    e.preventDefault()
  }
  return (
    <div className='container'>
      <div className='row row-content' style={{paddingLeft: '20px', textAlign:'left'}}>
        <div className='col-12'>
          <h3>
            Send us your Message
          </h3>
        </div>
        <div className="col-12 col-md-7">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor='firstname' md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input onChange={handleInputChange} type='text' name='firstname' placeholder='First Name' value={formDetails.firstname} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='lastname' md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input onChange={handleInputChange} type='text' name='lastname' placeholder='Last Name' value={formDetails.lastname} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='telnum' md={2}>
                Tel. Number
              </Label>
              <Col md={10}>
                <Input onChange={handleInputChange} type='text' name='telnum' placeholder='Tel. Number' value={formDetails.telnum} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='email' md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input onChange={handleInputChange} type='email' name='email' placeholder='Email' value={formDetails.email} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Input onChange={handleInputChange} type='checkbox' name='agree' checked={formDetails.agree}/>
                  <strong>May we Contact You?</strong>
                </FormGroup>
              </Col>
              <Col md={{size:3, offset:1}} >
              <Input onChange={handleInputChange} type='select' name='contactType' value={formDetails.contactType}>
              <option>Tel.</option>
              <option>Email</option>
              </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor='message' md={2}>Your Message</Label>
              <Col md={12}>
              <Input onChange={handleInputChange} type='textarea' name='message' value={formDetails.message} rows='12'>
              
              </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col md={{size:10}}>
                <Button type='submit' color='primary'>Send Message</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact
