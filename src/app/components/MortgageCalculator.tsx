"use client"
import { useState } from 'react';
import './MortgageCalculator.css'


const initialState = {
    amount: '',
    downPayment: '',
    interestRate: '',
    loanTerm: '',
}

const MortgageCalculator = () => {
    const [formData, setFormData] = useState(initialState)
    const [payment, setPayment] = useState(null)
    const [total, setTotal] = useState(null)
    const [interest, setInterest] = useState(null)

    const handleChange = (e:React.FormEvent<HTMLFormElement>)=>{
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
        calculateMonthlyPayment();
    };

    // Functions



    return (
        <div>
            Enter
        </div>
    );
}

export default MortgageCalculator;