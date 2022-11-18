import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../bootapi/Api';
import "./Form.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Deposit = () => {

    const [account, setAccount] = useState({});

    const HandleDeposit = (e) => {
        depositAmount(account);
        e.preventDefault();
    }
    const depositAmount = (acc) => {
        axios.put(`${base_url}/deposit`, acc).then(
            (response) => {
                toast.success("Deposit Success");
                console.log(response.data);
                console.log("Success");
            },
            (error) => {
                console.log(error);
                toast.error("Deposit failed");
            }
        );
    };

    // useEffect(()=>{
    //     depositAmount(account);
    // },[]);
    // class="p-4 bg-primary text-white
    return (
        <CardGroup>

            <div className="box1">
                <Form onSubmit={HandleDeposit} className='my-3'>
                    
                        <FormGroup>
                            <Label for="accountNo">Account Number - </Label>
                            <Input type="number" name='accountNo' id='accountNo' placeholder="Enter Your Account Number"
                                onChange={(e) => {
                                    setAccount({ ...account, accountNo: e.target.value });
                                }}
                            />
                        </FormGroup>
                    
                    <FormGroup>
                        <Label for="customerName">Account Holder Name - </Label>
                        <Input type="text" name='customerName' id='customerName' placeholder="Enter Your Name"
                            onChange={(e) => {
                                setAccount({ ...account, customerName: e.target.value });
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="amount">Deposit Amount - </Label>
                        <Input type="number" name='amount' id='amount' placeholder="Enter Amount"
                            onChange={(e) => {
                                setAccount({ ...account, amount: e.target.value });
                            }}
                        />
                    </FormGroup>


                    <Container className='text-center my-4'>
                        <Button type='submit'  color='success'>Add Amount</Button>
                        <Button type='reset'  color='warning mx-2'>Clear</Button>
                    </Container>
                </Form>
            </div>
        </CardGroup>
    )
}

export default Deposit