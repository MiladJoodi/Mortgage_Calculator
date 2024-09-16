import { Dispatch, SetStateAction } from "react";

export interface IValue{
    princial: number,
    loanTermInYears: number,
    loanTermInMonth: number,
    interestRate: number,
}

export interface IState{
    principalAmount: number;
    interestAmount: number;
    totalAmount: number;
    monthlyPayment: number;
    currency?: string
}

export interface IContext {
    state: IState;
    dispatch: Dispatch<SetStateAction<IState>>
}