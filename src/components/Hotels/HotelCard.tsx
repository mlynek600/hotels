import React, { useState, useContext, useEffect, useRef } from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
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
  const { changeNightsAndPrice, removeHotelCard } = hotelsData

  const cardRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const cardHeight = cardRef.current?.clientHeight
  const cardWidth = cardRef.current?.clientWidth
  const imageContainerWidth = imageContainerRef.current?.clientWidth

  const [nightsCounter, setNightsCounter] = useState(0)
  const [isImageLoaded, setImageLoaded] = useState(false)

  const hotelPrice = nightsCounter * Number(price)

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

  const onRemoveButtonClick = () => {
    removeHotelCard && removeHotelCard(id)
  }

  const imageElement = (
    <ImageContainer ref={imageContainerRef}>
      <Image
        src={imageLink}
        onLoad={() => {
          setImageLoaded(true)
        }}
      ></Image>
    </ImageContainer>
  )

  const cardContent = (
    <>
      <InfoContainer>
        <Title>{title} Hotel</Title>

        <SubTitle>{description}</SubTitle>
      </InfoContainer>

      <CostsContainer>
        <ChangeNightsContainer>
          <MinusButton
            onClick={() => setNightsCounter(nightsCounter - 1)}
            disabled={nightsCounter === 0}
          >
            -
          </MinusButton>

          <NightsNumber>{nightsCounter}</NightsNumber>

          <PlusButton
            onClick={() => setNightsCounter(nightsCounter + 1)}
            disabled={nightsCounter > 13}
          >
            +
          </PlusButton>
        </ChangeNightsContainer>

        <PriceContainer>
          <Price>{hotelPrice}</Price>
          <Currency>$</Currency>
        </PriceContainer>
      </CostsContainer>

      <RemoveIconContainer onClick={onRemoveButtonClick}>
        <RemoveIcon />
      </RemoveIconContainer>
    </>
  )

  const skeletonElement = (
    <SkeletonTheme color="#FFF" highlightColor="#F3F3F3">
      <Skeleton
        style={{ paddingTop: '10px' }}
        height={(cardHeight || 0) * 0.88}
        width={(cardWidth || 0) - (imageContainerWidth || 0)}
      />
    </SkeletonTheme>
  )

  return (
    <Card ref={cardRef}>
      {imageElement}

      {isImageLoaded ? cardContent : skeletonElement}
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
    width: 650px;
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
  border-radius: 10%;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.2);

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

const PriceContainer = styled.div`
  width: 100px;
  margin-right: 15px;
  padding-bottom: 1px;
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.semiText};

  @media (min-width: ${({ theme }) => theme.rwd.tablet.m}) {
    font-size: ${({ theme }) => theme.fontSize.text};
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.s20};
  }
`

const Price = styled.p``

const Currency = styled.p`
  margin-left: 5px;
`

const CostsContainer = styled.div`
  width: 200px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 7px;
  right: 0px;

  @media (min-width: ${({ theme }) => theme.rwd.tablet.s}) {
    padding-left: 20px;
  }

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    width: 250px;
    right: 5px;
    bottom: 10px;
  }
`

const MinusButton = styled.button`
  height: 15px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s20};

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSize.smallTitle};
  }
`

const PlusButton = styled.button`
  height: 15px;
  width: 20px;
  font-size: ${({ theme }) => theme.fontSize.s20};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    font-size: ${({ theme }) => theme.fontSize.s25};
  }
`

const NightsNumber = styled.p`
  padding: 0 10px;
  width: 15px;
  color: ${({ theme }) => theme.colors.grey};
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
