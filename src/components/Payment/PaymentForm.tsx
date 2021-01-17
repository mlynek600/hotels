import React from 'react'
import styled from 'styled-components'
import ContentContainer from '../UI/ContentContainer'

const PaymentForm: React.FC = () => {
  const labels = ['Name*', 'Address*', 'Phone', 'E-mail*']

  const nameInput = (
    <Input
      type="text"
      required
      autoFocus
      pattern=".{3,}"
      title="Minimum 3 characters"
    />
  )
  const addressInput = <Input required />
  const phoneInput = (
    <Input type="tel" pattern="[0-9]{9}" title="Format: 123456789" />
  )
  const emailInput = <Input required type="email" />

  const inputs = [nameInput, addressInput, phoneInput, emailInput]

  const rowsElements = labels.map((name, index) => (
    <Row key={name}>
      <Label>{name}</Label>
      {inputs[index]}
    </Row>
  ))

  return (
    <Wrapper>
      <ContentContainer>
        <Form>
          {rowsElements}

          <SubmitButton type="submit">Pay</SubmitButton>
        </Form>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 200px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  width: 150px;
  font-size: ${({ theme }) => theme.fontSize.s25};
`

const Input = styled.input`
  width: 280px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.semiText};
  color: ${({ theme }) => theme.colors.grey};
  padding: 10px;

  :focus {
    border-color: ${({ theme }) => theme.colors.purple};
    :invalid {
      border-color: ${({ theme }) => theme.colors.red};
    }
  }
  :required {
    box-shadow: none;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }

  -moz-appearance: textfield !important;
`

const SubmitButton = styled.button`
  height: 40px;
  width: 200px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.purpleGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s20};
`

export default PaymentForm
