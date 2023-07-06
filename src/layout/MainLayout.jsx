import React from 'react'
import styles from './MainLayout.module.css'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import { Container } from 'react-bootstrap'
import  PropTypes from 'prop-types'



export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
      <Header/>
      <Container className='mt-5'> {children}</Container>

      <Footer/>
    </div>
  )
}
//validar datos
MainLayout.propsTypes ={
  children: PropTypes.node.isRequired
}

