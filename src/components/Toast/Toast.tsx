import React, { useEffect } from 'react'

import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastProps = {
  message: string
  error?: string
}

const Toast: React.FC<ToastProps> = ({ message, error }) => {
  const toastInfo = (
    <Wrapper>
      <p>{message}</p>
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
  useEffect(() => {
    toast(toastInfo)
  }, [])

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.semiText};
`

const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
`

export default Toast
