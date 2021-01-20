import React from 'react'

import styled from 'styled-components'

type HotelCardImageProps = {
  imageLink: string
  imageContainerRef: React.RefObject<HTMLDivElement>

  onImageLoad: () => void
}

export const HotelCardImage: React.FC<HotelCardImageProps> = ({
  imageLink,
  imageContainerRef,

  onImageLoad,
}) => (
  <ImageContainer ref={imageContainerRef}>
    <Image src={imageLink} onLoad={onImageLoad}></Image>
  </ImageContainer>
)

const ImageContainer = styled.div`
  padding: 5px 10px;
  ${({ theme }) => theme.multipleStyles.flexCenter}

  @media (min-width: ${({ theme }) => theme.rwd.desktop.s}) {
    padding: 10px 20px;
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
