import React, { useContext } from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

import { HotelsContextData } from '../../../context/hotelsContext'
import { ContextType } from '../../../types'
import getOrderPrice from '../../../utils/getOrderPrice'

import { Toast } from '../../Toast/Toast'

import { HotelCard } from '../Card/HotelCard'

const HotelList: React.FC = () => {
  const hotelsData = useContext(HotelsContextData) as ContextType

  const { hotels, error, getHotels } = hotelsData

  const cardElements = hotels?.map(hotel => {
    const { id, name, subtitle, price, image } = hotel

    return (
      <HotelCard
        id={id}
        image={image}
        key={id}
        name={name}
        price={price}
        subtitle={subtitle}
      />
    )
  })

  const toastElement = error && (
    <Toast
      message="Something went wrong. Try again later."
      error={error.message}
    />
  )

  return (
    <Wrapper>
      <Title>Hotels Ordering</Title>

      {cardElements}

      {hotels && (
        <ContentContainer>
          <ChangeHotelsButton onClick={() => getHotels()}>
            <ChangeButtonText>Change hotels</ChangeButtonText>
          </ChangeHotelsButton>

          <TotalContainer>
            <TotalAmount>{getOrderPrice(hotels)} $</TotalAmount>

            <LinkContainer>
              <Link to="/payment">
                <BuyButton>Buy</BuyButton>
              </Link>
            </LinkContainer>
          </TotalContainer>
        </ContentContainer>
      )}

      {toastElement}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.purple};
`

const ContentContainer = styled.div`
  width: 380px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    width: 500px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 600px;
  }
`

const TotalContainer = styled.div`
  width: 100%;
  margin: 5px 40px 50px 0px;
  justify-self: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.s20};
`

const TotalAmount = styled.div`
  margin: 15px 30px 20px 0px;
  text-align: end;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    margin-right: 0px;
  }
`

const LinkContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 50px;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    margin-right: 0px;
  }
`

const BuyButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.purpleGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s20};
  justify-self: end;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    height: 50px;
    width: 140px;
  }
`

const ChangeHotelsButton = styled.button`
  height: 30px;
  width: 120px;
  margin-top: 25px;
  margin-left: 25px;
  position: absolute;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.deepRed};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    box-shadow: 0 4px 10px 0 ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    margin-top: 25px;
    margin-left: 0px;
  }
`

const ChangeButtonText = styled.p``

export default HotelList
