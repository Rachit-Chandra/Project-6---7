import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Account from './Account'
import base_url from '../bootapi/Api';
import { toast } from 'react-toastify';

const AllAccounts = () => {
    const [accounts, setAccount]=useState({});
        // {accno: 101, name: "Paras", bal: 1000},
        // {accno: 102, name: "Shubham", bal: 1100}
    // ]);

    const getAllAccounts=()=>{
        axios.get(`${base_url}/findAllUsers`).then(
            (response)=>{
                toast.success("Accounts Updated");
                setAccount(response.data);
                console.log(response.data);
            },
            (error)=>{
                toast.error("No Data Found");
                console.log(error);
            }
        );
    };

    useEffect(()=>{
        getAllAccounts();
    }, []);

    const updateGetAllAccounts=(accountNo)=>{
        setAccount(accounts.filter=((a)=>a.accountNo!=accountNo) );
    };

  return (
    <div>
        {
            accounts.length>0 ?
                accounts.map((acc)=><Account key={acc.accountNo} account={acc} updateAccounts={updateGetAllAccounts}/>)
                :
                "No Account Found"
        }
    </div>
  )
}

export default AllAccounts;