import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { HotelsContextData } from '../../context/hotelsContext'

type HotelCardProps = {
  id: string
  image: string
  name: string
  price: string
  subtitle: string
}

const HotelCard: React.FC<HotelCardProps> = ({
  image,
  name,
  price,
  subtitle,
}) => {
  const hotelsData = useContext(HotelsContextData)

  const [nightsCounter, setNightsCounter] = useState(0)

  const hotelPrice = nightsCounter * Number(price)

  const updateContext = hotelsData.onChangeNightsNumber

  useEffect(() => {
    updateContext && updateContext(name, nightsCounter, hotelPrice)
  }, [nightsCounter])

  // because of lorempixel images problems
  const imageLink = image.replace('pixel', 'flickr')

  const uppercaseFirst = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1)

  const title = uppercaseFirst(name)
  const description = uppercaseFirst(subtitle)

  const onMinusButtonClick = () => {
    if (nightsCounter !== 0) setNightsCounter(nightsCounter - 1)
  }
  const onPlusButtonClick = () => setNightsCounter(nightsCounter + 1)

  return (
    <Card>
      <ImageContainer>
        <Image src={imageLink}></Image>
      </ImageContainer>

      <InfoContainer>
        <Title>{title} Hotel</Title>

        <SubTitle>{description}</SubTitle>
      </InfoContainer>

      <PriceContainer>
        <MinusButton
          onClick={onMinusButtonClick}
          disabled={nightsCounter === 0}
        >
          -
        </MinusButton>

        <NightsNumber>{nightsCounter}</NightsNumber>

        <PlusButton onClick={onPlusButtonClick}>+</PlusButton>

        <Price>{hotelPrice} $</Price>
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
  position: relative;

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
  position: absolute;
  right: 20px;
  width: 200px;
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
