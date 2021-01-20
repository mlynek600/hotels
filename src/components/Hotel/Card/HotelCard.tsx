import React, { useState, useContext, useEffect, useRef } from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components'

import { HotelsContextData } from '../../../context/hotelsContext'
import RemoveIcon from '../../../images/removeIcon.svg'
import { ContextType } from '../../../types'

import { HotelCardImage, HotelCardInfo, HotelCardSelect } from './'

type HotelCardProps = {
  id: string
  image: string
  name: string
  price: string
  subtitle: string
}

export const HotelCard: React.FC<HotelCardProps> = ({
  id,
  image,
  name,
  price,
  subtitle,
}) => {
  const hotelsData = useContext(HotelsContextData) as ContextType
  const { changeNightsAndPrice, removeHotelCard } = hotelsData

  const cardRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const cardHeight = cardRef.current?.clientHeight
  const cardWidth = cardRef.current?.clientWidth
  const imageContainerWidth = imageContainerRef.current?.clientWidth

  const [nightsNumber, setNightsNumber] = useState(0)
  const [isImageLoaded, setImageLoaded] = useState(false)

  const hotelPrice = nightsNumber * Number(price)

  useEffect(() => {
    changeNightsAndPrice(id, nightsNumber, hotelPrice)
  }, [nightsNumber])

  // because of lorempixel ( from mock API / Faker.js ) images loading problems
  const imageLink = image.replace('pixel', 'flickr')

  const onImageLoad = () => setImageLoaded(true)

  const cardContent = (
    <>
      <HotelCardInfo name={name} subtitle={subtitle} />

      <CostsContainer>
        <HotelCardSelect onSelectChange={setNightsNumber} />

        <PriceContainer>
          <Price>{hotelPrice}</Price>
          <Currency>$</Currency>
        </PriceContainer>
      </CostsContainer>

      <RemoveIconContainer onClick={() => removeHotelCard(id)}>
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
      <HotelCardImage
        imageLink={imageLink}
        imageContainerRef={imageContainerRef}
        onImageLoad={onImageLoad}
      />

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
    right: 5px;
    bottom: 10px;
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
