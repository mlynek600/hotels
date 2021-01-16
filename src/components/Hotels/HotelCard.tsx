import React, { useState } from 'react'
import styled from 'styled-components'
import { HotelType } from '../../types/hotels'

const HotelCard: React.FC<HotelType> = ({
  image,
  name,
  price,
  subtitle,
}) => {
  const [nightsCounter, setNightsCounter] = useState(0)

  const imageLink = image.replace('pixel', 'flickr')

  const uppercaseFirst = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1)

  const title = uppercaseFirst(name)
  const description = uppercaseFirst(subtitle)

  const onMinusButtonClick = () => {
    if (nightsCounter !== 0) setNightsCounter(nightsCounter - 1)
  }
  const onPlusButtonClick = () => setNightsCounter(nightsCounter + 1)

  const totalAmount = Number(price) * nightsCounter

  return (
    <Card>
      <ImageContainer>
        <Image src={imageLink}></Image>
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>

        <SubTitle>{description}</SubTitle>
      </InfoContainer>

      <PriceContainer>
        <MinusButton onClick={onMinusButtonClick}>-</MinusButton>

        <NightsNumber>{nightsCounter}</NightsNumber>

        <PlusButton onClick={onPlusButtonClick}>+</PlusButton>

        <Price>{totalAmount} $</Price>
      </PriceContainer>
    </Card>
  )
}

const Card = styled.div`
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  height: 120px;
  align-items: center;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const ImageContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled.div``

const Image = styled.img`
  height: 90px;
`

const Title = styled.h2``

const SubTitle = styled.p``

const Price = styled.p`
  margin-left: 20px;
`

const PriceContainer = styled.div`
  padding-left: 50px;
  display: flex;
  align-items: center;
`

const MinusButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.smallTitle};
  padding-bottom: 5px;
`

const PlusButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s25};
  padding-bottom: 2px;
`

const NightsNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s20};
  padding: 0 5px;
`

export default HotelCard
