import React from 'react'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, ClientSection, CTA, Footer, } from "./components";
import styles from "./Styles"

const App = () => (
      <div className='bg-primary w-full overflow-hidden'>
          <div className={`${styles.boxWidth} mx-auto`} >
            <Navbar />
          </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Hero />
          </div>
          
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Stats />
            <Business /> 
            <Billing /> 
            <CardDeal /> 
            <Testimonials /> 
            <ClientSection /> 
            <CTA /> 
            <Footer />
          </div>
        </div>

      </div>
  )

export default App