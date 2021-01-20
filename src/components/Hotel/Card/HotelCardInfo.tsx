import React from 'react'

import styled from 'styled-components'

import makeFirstUppercase from '../../../utils/makeFirstUppercase'

type HotelCardInfoProps = {
  name: string
  subtitle: string
}

export const HotelCardInfo: React.FC<HotelCardInfoProps> = ({
  name,
  subtitle,
}) => {
  const title = makeFirstUppercase(name)
  const description = makeFirstUppercase(subtitle)

  return (
    <InfoContainer>
      <Title>{title} Hotel</Title>

      <Subtitle>{description}</Subtitle>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  padding-top: 10px;
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 15px;
  }
`

const Title = styled.h2`
  max-width: 160px;
  font-size: ${({ theme }) => theme.fontSize.text};

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    max-width: 200px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    max-width: 400px;
    padding-bottom: 5px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    max-width: 500px;
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.s25};
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.text};
  }
`
