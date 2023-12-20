import React from 'react';
import product from '../assets/product.png';
import tesla from '../assets/tesla.png'

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img height="15px" width="300px" src={product} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Dolor sit amet consectetur adipisicing elit. Assumenda, ea reiciendis!
              Aut, ad esse! Dolorum asperiores fugit delectus alias consequuntur officia eligendi
              repellat repudiandae distinctio unde,dolor sit amet consectetur adipisicing elit.
              Veritatis quia illum blanditiis iste in nemo ea molestias beatae autem commodi incidunt perspiciatis reiciendis
              nostrum rerum adipisci sed accusantium, mollitia fugit.
              labore illum quod nobis!</p>
            <button className="@apply px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey
                    transition-all duration-300 hover:-translate-y-4">Learn more</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/3'>
            <img height="15px" width="400px" src={tesla} alt='' />
          </div>


          {/* stats */}
          <div className='md:w-2/3 mx-auto'>
            <div>
              <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Tailwind CSS works by scanning all of your HTML, JavaScript components,
                and any other template files for class names, then generating all of the
                corresponding CSS for those styles.
                In order for Tailwind to generate all of the CSS you need, it needs to know about
                every single file in your project that contains any Tailwind class names.

                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique adipisci
                ipsum voluptate quibusdam deleniti vitae eius eum ea culpa sit ut
                accusamus eligendi eaque quidem voluptatem iure, amet enim sunt.</p>
              <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Janet Smith</h5>
              <p className='text-base text-neutralGrey mb-1'>British Dragon Boat racing Association</p>
              <div className='flex items-center gap-8 flex-wrap'>
                <img height="9px" width="20px" src="src/assets/picture (2).jpg" alt="" className='cursor-pointer' />
                <img height="9px" width="20px" src="src/assets/picture (3).jpg" alt="" className='cursor-pointer' />
                <img height="9px" width="20px" src="src/assets/picture (4).jpg" alt="" className='cursor-pointer' />
                <img height="9px" width="20px" src="src/assets/picture (5).jpg" alt="" className='cursor-pointer' />
                <img height="9px" width="20px" src="src/assets/picture (6).jpg" alt="" className='cursor-pointer' />
                <img height="9px" width="20px" src="src/assets/picture(12).jpg" alt="" className='cursor-pointer' />
                <div>
                  <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Products