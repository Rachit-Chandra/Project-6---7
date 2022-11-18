import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../bootapi/Api';
import "./Form.css"
const AddAccount = () => {
    
    const[account, setAccount]=useState({});

    const HandleAddAccount=(e)=>{
        addAccount(account);
        e.preventDefault();
    }

    const addAccount=(acc)=>{
        axios.post(`${base_url}/insert`,acc).then(
            (response)=>{
                toast.success("Account added successfully");
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }
  return (

    <div className="box1">
    <Form onSubmit={HandleAddAccount} className='my-3'>
        <FormGroup>
            <Label for="accountNo">Account Number - </Label>
            <Input type="text" name='accountNumber' id='accountNo' placeholder="Enter Your Account Number"
                onChange={(e)=>{
                    setAccount({...account,accountNo:e.target.value});
                }}
            />
        </FormGroup>

        <FormGroup>
            <Label for="customerName">Account Holder Name - </Label>
            <Input type="text" name='name' id='customerName' placeholder="Enter Your Name"
                onChange={(e)=>{
                    setAccount({...account,customerName:e.target.value});
                }}
            />
        </FormGroup>
        
        <FormGroup>
            <Label for="balance">Initial Deposit Balance - </Label>
            <Input type="number" name='balance' id='balance' placeholder="Enter Initial balance"
                onChange={(e)=>{
                    setAccount({...account,balance:e.target.value});
                }}
            />
        </FormGroup>

        <FormGroup>
            <Label for="ifscCode">IFSC CODE - </Label>
            <Input type="text" name='balance' id='ifscCode' placeholder="Enter ifscCode "
                onChange={(e)=>{
                    setAccount({...account,ifscCode:e.target.value});
                }}
            />
        </FormGroup>

        <FormGroup>
            <Label for="customerNo">Customer Number - </Label>
            <Input type="text" name='customerNo' id='customerNo' placeholder="Enter Customer Number "
                onChange={(e)=>{
                    setAccount({...account,customerNo:e.target.value});
                }}
            />
        </FormGroup>

        <FormGroup>
            <Label for="phoneNo">Phone Number - </Label>
            <Input type="text" name='phoneNo' id='phoneNo' placeholder="Enter Phone Number "
                onChange={(e)=>{
                    setAccount({...account,phoneNo:e.target.value});
                }}
            />
        </FormGroup>

        
        <Container className='text-center my-4'>
            <Button type='submit' color='success'>Add Account</Button>
            <Button type='reset' color='warning mx-2'>Clear</Button>
        </Container>
    </Form>
    </div>
  )
}

export default AddAccount