import React from 'react'
import Title from '../components/Title'
import {assets } from '../assets/assets'
import NewslerrerBox from '../components/NewsletterBox'

const About = () => {



  return (
    <div>
      
    <div className='text-2xl text-center pt-8 border-t'>

      <Title text1={'ABOUT'} text2={'US'} />

    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore odit alias eligendi unde autem tempore rem maxime laudantium veritatis obcaecati, aspernatur nihil quisquam iure. Sit fuga voluptas expedita eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quidem eligendi possimus in consectetur numquam nisi fuga omnis nesciunt repudiandae odio, aperiam velit modi laborum amet qui minima incidunt dolorum?</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa enim ratione aperiam accusantium temporibus incidunt vero distinctio excepturi quae, necessitatibus commodi corporis ex veniam praesentium dicta illo facere doloremque. Eum!
        Quaerat sint alias ea porro pariatur, quasi unde, dolor iure eaque ipsa, eligendi illo at earum consectetur fugiat minus perspiciatis inventore. Nam id consequatur facere asperiores est, quisquam quasi recusandae.
        Nostrum, illum. Atque quod architecto totam nemo nulla minima facere velit necessitatibus, consequuntur impedit culpa nam autem harum tenetur iure expedita ab excepturi. Eligendi adipisci eius itaque nam, veritatis officia?</p>
      
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, delectus modi. Totam veritatis nobis pariatur eaque quisquam ipsum, a optio delectus quis maxime beatae nulla tempore rem molestias necessitatibus ipsam?</p>
      </div>
    </div>


    <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

    </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'> 

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, cupiditate hic nihil dignissimos ducimus debitis. Debitis culpa fugiat, reprehenderit quo odio tempore nobis voluptate vel similique! Reiciendis, autem. Dolorem, ut!</p>
        </div>

        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus iste neque aperiam fuga non! Aliquid quae tempora at consequuntur placeat officiis, sapiente inventore veritatis mollitia aperiam quas velit? Illo!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

        <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, cupiditate hic nihil dignissimos ducimus debitis. Debitis culpa fugiat, reprehenderit quo odio tempore nobis voluptate vel similique! Reiciendis, autem. Dolorem, ut!</p>
          </div>


      </div>
      
      <NewslerrerBox />
      

    </div>
  )
}

export default About
