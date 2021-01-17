import React from 'react'

import HotelCards from '../components/Hotels/HotelCards'
import Layout from '../components/layout'
import { HotelsContext } from '../context/hotelsContext'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <HotelsContext>
        <HotelCards />
      </HotelsContext>
    </Layout>
  )
}
export default IndexPage
