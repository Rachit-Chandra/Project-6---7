import React from 'react'
import { Card, CardBody, CardTitle, CardHeader,CardText } from 'reactstrap'
import Home from './Home'
import Figure from 'react-bootstrap/Figure';
const Header = ({title}) => {
  return (
    <div className='fill-window text-center'>
      {/* <Card className='bg-info'> */}
        {/* <CardBody > */}
          {/* <h1>Welcome to Local Bank</h1> */}
          {/* <h1>{title}</h1> */}
        {/* </CardBody> */}
      {/* </Card> */}

      <Card
    className="my-3"
    color="danger"
    inverse
    style={{
      width: '82rem'
    }}
  >
    <CardHeader tag="h2">
      {/* IDFC First BANK */}
      {/* <img src={require('../assets/reactlogo5.jpg')} /> */}

      <Figure>
      <Figure.Image
        width={180}
        height={180}
        alt="171x180"
        src={require('../assets/reactlogo5.jpg')} 
      />
      </Figure>
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">

      <h1>{title}</h1>
      </CardTitle>
      <CardText>
      IDFC FIRST Bank offers investment solutions as well as protection services through mutual funds, gold bonds, investment-linked insurance and business insurance.
      </CardText>
    </CardBody>
  </Card>

    </div>
  )
}

export default Header