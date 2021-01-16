import React from 'react'
import Layout from '../components/layout'
import { HotelsContext } from '../context/hotelsContext'
import HotelCards from '../components/Hotels/HotelCards'

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
