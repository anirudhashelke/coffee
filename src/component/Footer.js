import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
    const data=[
        <FaFacebookF />,
        <FaTwitter />,
        <FaLinkedinIn />,
        <ImInstagram />
    ]
  return (
    <>
    <div className='a_footer mt-5'>
         <div className="container text-white flex justify-center pt-5 pb-3  ">
            <div className=' w-[70%] mt-5 text-center '> 
                <h5 className='text-[30px] text-[#fefefd] a-700'>Address</h5>
                <p className='text-[18px] text-[#fefefd] a-400 py-5'>here, content here', making it look like readable English. Many
                     desktop publishing <br /> packages and web page editors now use</p>
                     <div className='flex  align-items-center py-3 gap-2 justify-center '>
                     <FaPhoneAlt  size={13}/>
                        <h6 className='text-[16px a-400]'>+01 1234567890</h6>
                     </div>
                     <div className='flex gap-2 align-items-center justify-center'>
                     <IoMdMail className='text-white' />
                        <h6 className='text-[16px a-400]'>mail@domain.com</h6>
                     </div>
            </div>
         </div>
    </div>
    <div className='bg-[#D07D6B] py-2'>
    <div className=' justify-around flex container align-items-center'>
       <div>
        <h6 className='text-[#fff] text-[16px] a-400 '>2045 All Rights Reserved. By <span className='hover:text-[#363636]'> HTML Design</span></h6>
       </div>
       <div className='flex gap-2'>
        {data.map((data,index)=>{
            return  <div key={index} className='bg-[#FFFFFF]  a_footer_icons flex  align-items-center justify-center text-[#f75b59] text-[19px hover:text-[#363636] '>
           {data}
            </div>
        })}
       </div>
    </div>
    </div>
    </>
  )
}

export default Footer