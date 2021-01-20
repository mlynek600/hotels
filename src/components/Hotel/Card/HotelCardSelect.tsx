import React from 'react'
import styled from 'styled-components'

const createSelectItems = (max: number): JSX.Element[] => {
  const items = []
  for (let i = 0; i <= max; i++) {
    items.push(
      <option key={i} value={i}>
        {i}
      </option>
    )
  }
  return items
}

const selectItems = createSelectItems(14)

type HotelCardSelectProps = {
  onSelectChange: (nightsNumber: number) => void
}

export const HotelCardSelect: React.FC<HotelCardSelectProps> = ({
  onSelectChange,
}) => {
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => onSelectChange(Number(event.target.value))

  return (
    <Select onChange={handleSelectChange}>
      <option value="" disabled selected>
        Nights
      </option>
      {selectItems}
    </Select>
  )
}

const Select = styled.select`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  :hover {
    cursor: pointer;
  }
`
