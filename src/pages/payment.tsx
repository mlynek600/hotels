import React from 'react'

import Layout from '../components/layout'
import PaymentForm from '../components/Payment/PaymentForm'
import { HotelsContext } from '../context/hotelsContext'

const PaymentPage: React.FC = () => {
  return (
    <Layout>
      <HotelsContext>
        <PaymentForm />
      </HotelsContext>
    </Layout>
  )
}
export default PaymentPage
