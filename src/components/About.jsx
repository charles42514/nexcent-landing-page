import React from 'react';
import about from '../assets/about.png'

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img height="175px" width="400px" src={about} alt="" />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of
              spending three years at Pixelgrade</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea reiciendis!
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
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br></br>
              <span className='text-brandPrimary'>business reinvent itself</span></h2>
            <p>We reached here with our hard work and dedication</p>

          </div>


          {/* stats */}
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
            gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img height="9px" width="70px" src="src/assets/stats1.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img height="9px" width="70px" src="src/assets/stats2.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>

            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                <img height="9px" width="70px" src="src/assets/stats3.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img height="9px" width="70px" src="src/assets/stats4.png" alt="" />
                <div>
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,438</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};

export default About
