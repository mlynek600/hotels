import React from 'react'
import styled from 'styled-components'

type PaymentFormRowProps = {
  autoFocus?: boolean
  isRequired?: boolean
  label: string
  pattern?: string
  title?: string
  type: string
}

export const PaymentFormRow: React.FC<PaymentFormRowProps> = ({
  autoFocus,
  isRequired,
  label,
  pattern,
  title,
  type,
}) => {
  const name = isRequired ? `${label}*` : label

  return (
    <Row key={label}>
      <Label>{name}</Label>

      <Input
        type={type}
        required={isRequired}
        autoFocus={autoFocus}
        pattern={pattern}
        title={title}
      />
    </Row>
  )
}

const Row = styled.div`
  height: 30px;
  margin-bottom: 30px;
  ${({ theme }) => theme.multipleStyles.flexCenter}

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
  padding: 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.cloud};
  font-size: ${({ theme }) => theme.fontSize.verySmall};

  :focus {
    :invalid {
      box-shadow: 0 1px 6px 0 rgba(222, 53, 76, 0.5);
    }
    :valid {
      box-shadow: 0 1px 6px 0 rgba(60, 24, 116, 0.5);
    }
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    width: 240px;
    font-size: ${({ theme }) => theme.fontSize.smallText};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 280px;
    font-size: ${({ theme }) => theme.fontSize.semiText};
  }
`
