import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'reactstrap'
import Card from 'react-bootstrap/Card';
import "./Form.css"
const Options = () => {
  return (
    <>
      <ListGroup>
        <Card className="box4">
          <Link className='list-group-item list-group-item-action' color="danger" tag="a" to="/">Home</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/accounts">All Accounts</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/add-account">Add Account</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/deposit">Deposit Money</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/withdraw">Withdraw Money</Link>
          <Link className='list-group-item list-group-item-action' tag="a" to="/transfer">Transfer Money</Link>
        </Card>
        {/* <ListGroupItem active tag="a" href="#" action>Home</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>All Accounts</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Add Account</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Deposit Money</ListGroupItem>
          <ListGroupItem  color ="danger"  tag="a"  to="/transfer" action>Transfer Money</ListGroupItem> */}

        {/* <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger" tag="a" >Porta ac consectetur ac</ListGroupItem> */}

        {/* <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
      <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem> */}
        <Card>
          <Card.Img variant="top" src={require('../assets/idfc2.png')}
          />
          <Card.Body>
            <Card.Title>Best finance sector</Card.Title>
            <Card.Text>
              Join us
            </Card.Text>
          </Card.Body>
        </Card>
      </ListGroup>


    </>

  )
}

export default Options