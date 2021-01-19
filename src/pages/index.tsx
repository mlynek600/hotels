import React from 'react'

import HotelList from '../components/Hotel/List/HotelList'
import Layout from '../components/layout'
import { HotelsContext } from '../context/hotelsContext'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HotelsContext>
        <HotelList />
      </HotelsContext>
    </Layout>
  )
}
export default IndexPage
