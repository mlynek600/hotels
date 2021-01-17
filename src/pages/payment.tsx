import React from 'react'
import Layout from '../components/layout'
import { HotelsContext } from '../context/hotelsContext'
import PaymentForm from '../components/Payment/PaymentForm'

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
