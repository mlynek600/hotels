import React, { ReactChild, ReactChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import '../static/fonts/fonts.css'
import GlobalStyle from '../utils/globalStyles'
import theme from '../utils/theme'

type Props = {
  children: ReactChild | ReactChildren | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
