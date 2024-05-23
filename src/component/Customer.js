import React from 'react'

const Customer = () => {
    const customer = [
        {
            imgurl: "client-img1.png",
            titel: "Joy Moark",
        },
        {
            imgurl: "client-img2.png",
            titel: "Mihacal",
        },
        {
            imgurl: "client-img3.png",
            titel: "Uliya den",
        },
    ]
    return (
        <div className='a_custpmer mt-5 '>
            <div className="container py-5 ">
                <h1 className='a-2 text-[40px] a-700 text-center pt-4 pb-3 '>WHAT SYAS CUSTOMERS</h1>
                <div className='pb-4 flex justify-center'> <img style={{ width: "60px" }} src="bulit-icon.png" alt="" /></div>
                {customer.map(({ titel, imgurl }, index) => {
                    return <div key={index} className="row a_customer_data ms-[80px]">
                        <div className='flex col-12 col-md-9  gap-3 py-3 '>
                            <div className='h-[150px] w-[250px]'><img className='h-[100%] w-[100%]' src={imgurl} alt="" /></div>
                            <div>
                                <h5 className='a-2 text-[24px] a-700 py-3'>{titel}</h5>
                                <p className='a-2 text-[17px] a-300'>now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancynow use Lorem Ipsum as their default model text,</p>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default Customer