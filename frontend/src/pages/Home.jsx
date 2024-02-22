import React from 'react'
import ServiceList from '../components/Services/ServiceList'
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from '../assets/images/avatar-icon.png';
import DoctorList from "../components/Doctors/DoctorList";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>Home






{    /* service section */
}      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our medical services
            </h2>
            <p className='text_para text-center'>
              World-class care for everyone. Our Health System offers unmatched expert health care .
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
{      /* service */
}

{      /* feature section */
}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between fles-col lg:flex-row'>
{        /* feature content */
}            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get virtual treatement <br /> anytime.</h2>
              <ul className="pl-4">
                <li className="text_para">1. Schedule the appointment directly.</li>
                <li>2. Search for  your physicians here, and contact their office.</li>
                <li>3. View our physicians who are accepting new partients, use the online scheduling
                  tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className='btn'>Learn More</button>
              </Link>
            </div>
{      /* feature image */
}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt="" />

              <div className=' w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
          md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:heading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:heading-5 text-headingColor font-[600]'>
                      10:00 AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w[34px] lg:h-[34px] flext items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] loading-[8px] lg:text-[12px] lg:loading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4'>
                  Consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>wayne collin</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{      /* feature section */
}
{      /* our great doctors*/
}      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Our medical Doctors.
            </h2>
            <p className='text_para text-center'>
              World-class care for everyone. Our Health System offers unmatched expert health care .
            </p>
          </div>
          <DoctorList />

        </div>
      </section>
{      /* our great doctors*/
}

    </div>
  )
}

export default Home