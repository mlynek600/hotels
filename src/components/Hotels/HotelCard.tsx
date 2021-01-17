import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { HotelsContextData } from '../../context/hotelsContext'
import RemoveIcon from '../../images/removeIcon.svg'

type HotelCardProps = {
  id: string
  image: string
  name: string
  price: string
  subtitle: string
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  image,
  name,
  price,
  subtitle,
}) => {
  const hotelsData = useContext(HotelsContextData)

  const [nightsCounter, setNightsCounter] = useState(0)

  const hotelPrice = nightsCounter * Number(price)

  const { changeNightsAndPrice, removeHotelCard } = hotelsData

  useEffect(() => {
    changeNightsAndPrice &&
      changeNightsAndPrice(id, nightsCounter, hotelPrice)
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

  const onRemoveButtonClick = () => {
    removeHotelCard && removeHotelCard(id)
  }

  return (
    <Card>
      <ImageContainer>
        <Image src={imageLink}></Image>
      </ImageContainer>

      <InfoContainer>
        <Title>{title} Hotel</Title>

        <SubTitle>{description}</SubTitle>
      </InfoContainer>

      <CostsContainer>
        <ChangeNightsContainer>
          <MinusButton
            onClick={onMinusButtonClick}
            disabled={nightsCounter === 0}
          >
            -
          </MinusButton>

          <NightsNumber>{nightsCounter}</NightsNumber>

          <PlusButton
            onClick={onPlusButtonClick}
            disabled={nightsCounter > 13}
          >
            +
          </PlusButton>
        </ChangeNightsContainer>

        <PriceContainer>
          <Price>{hotelPrice} $</Price>
        </PriceContainer>
      </CostsContainer>

      <RemoveIconContainer onClick={onRemoveButtonClick}>
        <RemoveIcon />
      </RemoveIconContainer>
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

const CostsContainer = styled.div`
  padding-left: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  width: 200px;
  justify-content: space-between;
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

const ChangeNightsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
`

const PriceContainer = styled.div`
  width: 100px;
`

const RemoveIconContainer = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`
export default HotelCard
