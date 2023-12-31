import React from 'react'
import styles from './style';
import { 
  Navbar, 
  Hero,
  Stats,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Billing} from './components';

const App = () => (
  
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxwidth}`}>
        <Navbar />
      </div>

    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxwidth}`}>
        <Hero />
      </div>

    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxwidth}`}>
        <Stats />
        <Business />
        <Billing/>
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>

    </div>
  </div>
  
)

export default App