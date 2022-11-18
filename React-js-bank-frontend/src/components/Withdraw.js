import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../bootapi/Api';
import "./Form.css"

const Withdraw = () => {

    const[account, setAccount]=useState({});

    const HandleWithdraw=(e)=>{
        withdrawAmount(account);
        e.preventDefault();
    }

    const withdrawAmount=(acc)=>{
        axios.put(`${base_url}/withdraw`,acc).then(
            (response)=>{
                toast.success("Withdraw Success")
                console.log("success")
                console.log(response.data)
            },
            (error)=>{
                console.log(error);
                toast.error("Withdraw failed");
            }
        );
    };
  return (
    <div className="box1">
    <Form onSubmit={HandleWithdraw} className='my-3'>
            <FormGroup>
                <Label for="accountNo">Account Number - </Label>
                <Input type="number" name='accountNo' id='accountNo' placeholder="Enter Your Account Number" 
                    onChange={(e)=>{
                        setAccount({...account,accountNo:e.target.value});
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="customerName">Account Holder Name - </Label>
                <Input type="text" name='customerName' id='customerName' placeholder="Enter Your Name"
                    onChange={(e)=>{
                        setAccount({...account,customerName:e.target.value});
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="amount">Withdraw Amount - </Label>
                <Input type="number" name='amount' id='amount' placeholder="Enter Amount"
                    onChange={(e)=>{
                        setAccount({...account,amount:e.target.value});
                    }}
                />
            </FormGroup>

            <Container className='text-center my-4'>
                <Button type='submit' color='success'>Withdraw Amount</Button>
                <Button type='reset' color='warning mx-2'>Clear</Button>
            </Container>
        </Form>
        </div>
  )
}

export default Withdraw