import React, { useRef } from 'react'

import { toast } from 'react-toastify'
import styled from 'styled-components'

import { ToastComponent } from '../Toast/Toast'

import { PaymentFormRow } from './PaymentFormRow'

const PaymentForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const nameElement = (
    <PaymentFormRow
      autoFocus
      isRequired
      label="Name"
      pattern=".{3,}"
      title="Minimum 3 characters"
      type="text"
    />
  )

  const addressElement = (
    <PaymentFormRow isRequired label="Address" type="text" />
  )

  const phoneElement = (
    <PaymentFormRow
      label="Phone"
      pattern="[0-9]{9}"
      title="Format: 123456789"
      type="tel"
    />
  )

  const emailElement = (
    <PaymentFormRow isRequired label="E-mail" type="email" />
  )

  const toastMsg = <ToastMessage>Thank you for your order!</ToastMessage>

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    toast(toastMsg)

    formRef.current?.reset()
  }

  return (
    <Wrapper>
      <Title>Payment</Title>
      <Form ref={formRef} onSubmit={event => onFormSubmit(event)}>
        {nameElement}
        {addressElement}
        {phoneElement}
        {emailElement}

        <SubmitButton type="submit">Pay</SubmitButton>
      </Form>

      {ToastComponent}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 80px;
  flex-direction: column;
  ${({ theme }) => theme.multipleStyles.flexCenter}
`

const Title = styled.h1`
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.purple};
`

const Form = styled.form`
  height: 350px;
  width: 320px;
  padding-top: 20px;
  border-color: ${({ theme }) => theme.colors.cloud};
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  flex-direction: column;
  ${({ theme }) => theme.multipleStyles.flexCenter}

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 400px;
    width: 450px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 500px;
    padding-top: 50px;
  }
`

const SubmitButton = styled.button`
  height: 30px;
  width: 150px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.purpleGrey};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.s20};

  :hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 40px;
    width: 200px;
  }
`

const ToastMessage = styled.p`
  color: ${({ theme }) => theme.colors.purple};
`

export default PaymentForm
