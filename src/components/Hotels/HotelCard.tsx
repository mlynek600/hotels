import React from 'react'
import styled from 'styled-components'
import { HotelType } from '../../types/hotels'

const HotelCard: React.FC<HotelType> = ({
  imageUrl,
  name,
  price,
  subtitle,
}) => {
  const imageLink = imageUrl.replace('pixel', 'flickr')

  const uppercaseFirst = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1)

  const title = uppercaseFirst(name)
  const description = uppercaseFirst(subtitle)
  return (
    <Card>
      <ImageContainer>
        <Image src={imageLink}></Image>
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>

        <SubTitle>{description}</SubTitle>

        <Price>{price} $</Price>
      </InfoContainer>

      <PriceContainer>
        <MinusButton>-</MinusButton>
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

const Price = styled.p``

const PriceContainer = styled.div`
  padding-left: 50px;
`

const MinusButton = styled.div``

export default HotelCard
