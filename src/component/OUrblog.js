import React from 'react'

const OUrblog = () => {
    const blogData=[
              {
               imgurl:"blog-img1.png"
              },
              {
                imgurl:"blog-img2.png"
              },
    ]
    return (
        <div className='container my-5 a_blogs'>
            <h1 className='a-2 text-[40px] a-700 text-center py-3 '>OUR BLOG</h1>
      <div className='pb-4  flex justify-center'> <img  style={{width:"60px"}} src="bulit-icon.png"  alt="" /></div>
            <div className="row justify-center pt-5 gap-2" >
                {blogData.map((values,index)=>{
                    return  <div key={index} className='col-12 col-md-5  a_blogs_details'>
                    <div className='a_ourblog position-relative'>
                        <div><img src={values.imgurl} alt="" /></div>
                        <div className='px-3  py-4'>
                            <h5 className='text-[20px] a-2 a-700'>PREP TECHNIQUES COFFEE</h5>
                            <p className='text-[16px] a-2 a-400 py-3'>distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
                                it has a moredistracted by the readable content of a page when looking at its layout. The point of
                                 using Lorem Ipsum is that it has a more</p>
                        </div>
                        <div className='bg-[red] px-3 py-4 w-[23%] position-absolute top-[-12px] left-[-12px]'><h1 className='text-[18px] text-white'>05 APRIL</h1></div>
                    </div>
                    <div className='flex justify-center'><button  className=' a_our_btn px-[40px] py-[12px] text-[18px] mt-4  rounded-[5px] text-[#d78373] hover:text-[#3b3b3b]    '>READ MORE</button></div>
                </div>
                })}
            </div>
        </div>
    )
}

export default OUrblog