import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
// import "./banner.css";
const Header = () => {
  const data = [
    {
      imgurl: "banner-img.png",
      heading: "coffee",
      titel: "Tasty Of DozeCafe",
      disc: "more-or-less normal distribution of letters, as opposed to using",
      btn: "Call Now",
      btnA: "About Us",
    },
    {
      imgurl: "banner-img.png",
      heading: "coffee",
      titel: "Tasty Of DozeCafe",
      disc: "more-or-less normal distribution of letters, as opposed to using",
      btn: "Call Now",
      btnA: "About Us",
    },
    {
      imgurl: "banner-img.png",
      heading: "coffee",
      titel: "Tasty Of DozeCafe",
      disc: "more-or-less normal distribution of letters, as opposed to using",
      btn: "Call Now",
      btnA: "About Us",
    },

  ]
  return (
    <section className='py-4 a_banner '>
      <div className='container  '>
        <div className="row justify-between ">
          <div className='col-12 col-md-3 flex  align-center '>
            <img src="logo.png" className='h-[28px]' alt="" />
          </div>
          <div className='col-12 col-md-6  justify-center align-center '>

            <ul className='flex  gap-3 justify-end align-center  a-header'>
              <li><Link className='a-home active' to={"/"}>HOME</Link> </li>
              <li><Link to={"/about"}>ABOUT</Link> </li>
              <li><Link to={"/coffees"}>COFFEES</Link> </li>
              <li><Link to={"/shop"}>SHOP</Link> </li>
              <li><Link to={"/blog"}>BLOG</Link> </li>
              <li><Link to={"/contact"}>CONTACT</Link> </li>
            </ul>
          </div>

          <div className='col-12 col-md-2 a_header_login  flex justify-around align-center text-[#d98473]  '>
            <div className=' gap-3 align-center flex'>
              <FaUser />
              <h5>LOGIN</h5>
            </div>
            <FaSearch />
          </div>
        </div>
      </div>
      <Carousel showStatus={false} autoPlay interval={2000} infiniteLoop showArrows={false}  >
        {data.map(({ imgurl, heading, titel, disc, btn, btnA }, index) => {
          return <div key={index} className='container  m-auto  mt-5 '>
            <div className='row  align-center justify-center gap-5 '>
              <div className='col-12 col-md-5'>
                <img src={imgurl} alt="" />
              </div>
              <div className='col-12 col-md-5'>
                <div className='text-start'>
                  <h1 className='a-c text-[90px] a-800 py-5'>{heading}</h1>
                  <h4 className='text-[24px] text-[#e38773] a-700 '>{titel}</h4>
                  <h5 className='text-[16px]  text-[#4a4949] pt-3'>{disc}</h5>
                  <div className='flex gap-3 my-5'>
                    <button className=' bg-[#d48272] px-[40px] py-[12px] text-[18px]  rounded-[5px] text-[#fefefd] hover:bg-[#4a4949]'> {btnA}</button>
                    <button className='bg-[#4a4949]  px-[40px] py-[12px] text-[18px]  rounded-[5px] text-[#fefefd] '> {btn}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </Carousel>
    </section>
  )
}

export default Header