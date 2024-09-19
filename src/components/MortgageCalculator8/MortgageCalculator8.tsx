"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [homePrice, setHomePrice] = useState(425000)
  const [downPayment, setDownPayment] = useState(85000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(5)
  const [zipCode, setZipCode] = useState('')

  const downPaymentPercentage = Math.round((downPayment / homePrice) * 100)
  
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return Math.round(monthlyPayment)
  }

  const monthlyPayment = calculateMonthlyPayment()

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 w-full">
      <Card className="w-full md:w-1/3">
        <CardContent className="pt-6">
          <div className="space-y-4 ">
            <div>
              <Label htmlFor="homePrice">Home price</Label>
              <Input
                id="homePrice"
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-grow">
                <Label htmlFor="downPayment">Down payment</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </div>
              <div className="w-20">
                <Label htmlFor="downPaymentPercentage">Percentage</Label>
                <Input
                  id="downPaymentPercentage"
                  type="number"
                  value={downPaymentPercentage}
                  readOnly
                />
              </div>
            </div>
            <div>
              <Label htmlFor="loanTerm">Loan term</Label>
              <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="interestRate">Interest rate</Label>
              <Input
                id="interestRate"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP code</Label>
              <Input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <Button className="w-full">Update</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full md:w-2/3">
        <CardHeader>
          <CardTitle>Monthly payment breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-64">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                <circle cx="50" cy="50" r="38" fill="white" />
                <text x="50" y="50" textAnchor="middle" dy="0.3em" className="text-2xl font-bold">${monthlyPayment}/mo</text>
              </svg>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between">
              <span>Principal & interest</span>
              <span>${monthlyPayment}</span>
            </div>
            <div className="flex justify-between">
              <span>Property tax</span>
              <span>$280</span>
            </div>
            <div className="flex justify-between">
              <span>Homeowner's insurance</span>
              <span>$66</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}