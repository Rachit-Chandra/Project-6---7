import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap'
import base_url from '../bootapi/Api'
import "./Form.css"
const Account = ({account, updateAccounts}) => {
    const deleteAccount=(accno)=>{
        axios.delete(`${base_url}/${accno}`).then(
            (response)=>{
                toast.success("Account Deleted");
                updateAccounts(accno);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };
  return (
    <div className='text-center'>
        <Card className='box4'>
            <CardBody>
                <CardTitle>User Name :- {account.customerName}</CardTitle>
                <CardText>Account Number :- {account.accountNo}</CardText>
                <CardText>customer Number :- {account.customerNo}</CardText>
                <CardText>ifscCode :- {account.ifscCode}</CardText>
                <CardText>phoneNo :- {account.phoneNo}</CardText>
                <CardText>Balance :- {account.balance}</CardText>

                  {/* <CardSubtitle>Account no: {account.accountNo}</CardSubtitle> */}
                {/* <CardText>Balance :- {account.balance}</CardText> */}
                <Container>
                    <Button color='danger'
                        onClick={()=>{deleteAccount(account.accno)}}
                    >Delete</Button>
                    {/* <Button color='warning' className='mx-2'
                        onClick={()=>{updateAccounts(account)}}
                    >Update</Button> */}
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Account