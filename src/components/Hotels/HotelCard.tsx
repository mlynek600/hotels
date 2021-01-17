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

  // because of lorempixel ( from mock API / Faker.js ) images loading problems
  const imageLink = image.replace('pixel', 'flickr')

  const makeUppercaseFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1)

  const title = makeUppercaseFirstLetter(name)
  const description = makeUppercaseFirstLetter(subtitle)

  const onMinusButtonClick = () => {
    setNightsCounter(nightsCounter - 1)
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
  height: 90px;
  width: 90%;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${({ theme }) => theme.rwd.mobile.s}) {
    width: 70%;
  }

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    height: 100px;
    width: 500px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    height: 120px;
    width: 600px;
  }
`

const ImageContainer = styled.div`
  height: 70px;
  width: 112px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    height: 90px;
    width: 160px;
    padding: 10px 20px;
  }
`

const InfoContainer = styled.div`
  align-self: flex-start;
  padding-top: 10px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-top: 15px;
  }
`

const Image = styled.img`
  height: 70px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    height: 90px;
  }
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.text};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-bottom: 5px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.s25};
  }
`

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smallText};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.text};
  }
`

const Price = styled.p`
  margin-left: 20px;
`

const CostsContainer = styled.div`
  width: 200px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 7px;
  right: 30px;

  @media (min-width: ${({ theme }) => theme.rwd.mobile.m}) {
    right: 20px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 250px;
    right: 0px;
    bottom: 35px;
  }
`

const MinusButton = styled.button`
  padding-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSize.s20};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const PlusButton = styled.button`
  padding-bottom: 2px;
  font-size: ${({ theme }) => theme.fontSize.s20};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }
`

const NightsNumber = styled.p`
  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSize.text};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.s20};
  }
`

const ChangeNightsContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`

const PriceContainer = styled.div`
  width: 100px;
  padding-bottom: 2px;
  font-size: ${({ theme }) => theme.fontSize.semiText};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-bottom: 1px;
    font-size: ${({ theme }) => theme.fontSize.s20};
  }
`

const RemoveIconContainer = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    right: 12px;
    top: 17px;
  }
`
export default HotelCard
