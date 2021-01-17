import React, { useContext } from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

import { HotelsContextData } from '../../context/hotelsContext'

import HotelCard from './HotelCard'

const HotelCards: React.FC = () => {
  const hotelsData = useContext(HotelsContextData)

  const { hotels } = hotelsData

  const getTotalOrderPrice = () => {
    let result = 0

    hotels?.forEach(hotel => {
      result += hotel.totalPrice || 0
    })

    return result
  }

  const cardElements = hotels?.map(hotel => {
    const { id, name, subtitle, price, image } = hotel

    return (
      <HotelCard
        key={id}
        id={id}
        image={image}
        name={name}
        price={price}
        subtitle={subtitle}
      />
    )
  })

  return (
    <Wrapper>
      <Title>Hotels Ordering</Title>
      {cardElements}

      {hotels && (
        <ContentContainer>
          <TotalContainer>
            <TotalAmount>{getTotalOrderPrice()} $</TotalAmount>

            <LinkContainer>
              <Link to="/payment">
                <BuyButton>Buy</BuyButton>
              </Link>
            </LinkContainer>
          </TotalContainer>
        </ContentContainer>
      )}
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
`

const LinkContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 50px;
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

export default HotelCards
