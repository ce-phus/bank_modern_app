import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id ='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt= 'billing' className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/>billing and invoice</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur suscipit ratione sint veniam quas enim dolor atque voluptates maxime in necessitatibus, eos beatae. Placeat molestiae modi eaque laborum? Possimus, vel.</p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
      </div>
  </section>
)
  


export default Billing