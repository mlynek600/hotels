import React from 'react'
import styled from 'styled-components'

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
      <Form>
        {rowsElements}

        <SubmitButton type="submit">Pay</SubmitButton>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.cloud};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  width: 320px;
  height: 350px;
  padding-top: 50px;
  background-color: white;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 500px;
    height: 400px;
  }
`

const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    margin-bottom: 40px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    margin-bottom: 50px;
  }
`

const Label = styled.label`
  width: 65px;
  font-size: ${({ theme }) => theme.fontSize.smallText};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    width: 100px;
    font-size: ${({ theme }) => theme.fontSize.bigText};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 150px;
    font-size: ${({ theme }) => theme.fontSize.s25};
  }
`

const Input = styled.input`
  width: 200px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.verySmall};
  color: ${({ theme }) => theme.colors.grey};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.cloud};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    width: 240px;
    font-size: ${({ theme }) => theme.fontSize.smallText};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 280px;
    font-size: ${({ theme }) => theme.fontSize.semiText};
  }

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
  height: 30px;
  width: 150px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.purpleGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s20};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s ease-in-out;
  margin-top: 20px;

  :hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 40px;
    width: 200px;
  }
`

export default PaymentForm
