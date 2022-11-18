import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../bootapi/Api';
import "./Form.css"

const Transfer = () => {

    const[account, setAccount]=useState({});

    const HandleTransfer=(e)=>{
        transferAmount(account);
        e.preventDefault();
    }

    const transferAmount=(acc)=>{
        axios.put(`${base_url}/transfer`,acc).then(
            (response)=>{
                toast.success("Transfer Success")
                console.log("success")
                console.log(response.data)
            },
            (error)=>{
                console.log(error);
                toast.error("Transfer failed");
            }
        );
    };
  return (
    <>
    <div className="box1">
    <Form onSubmit={HandleTransfer} className='my-3'>
            <FormGroup>
                <Label for="accountNo1">Sender Account Number - </Label>
                <Input type="number" name='accountNo1' id='accountNo1' placeholder="Enter Your Account Number" 
                    onChange={(e)=>{
                        setAccount({...account,accountNo1:e.target.value});
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="accountNo2">Recevier Account Number - </Label>
                <Input type="number" name='accountNo2' id='accountNo2' placeholder="Enter Reciver Account Number"
                    onChange={(e)=>{
                        setAccount({...account,accountNo2:e.target.value});
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="amount">Transfer Amount - </Label>
                <Input type="number" name='amount' id='amount' placeholder="Enter Amount"
                    onChange={(e)=>{
                        setAccount({...account,amount:e.target.value});
                    }}
                />
            </FormGroup>

            <Container className='text-center my-4'>
                <Button type='submit' color='success'>Transfer Amount</Button>
                <Button type='reset'  color='warning mx-2'>Clear</Button>
            </Container>
        </Form>
        </div>
   
        </>
  )
}

export default Transfer