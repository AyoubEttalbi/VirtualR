import React from 'react'
import { testimonials } from '../constants'
export default function Testimonials() {
    return (
        <div className="mt-10 tracking-wide">
            <h2 className="text-3xl lg:text-6xl sm:text-5xl text-center my-10 lg:my-28">What people are saying</h2>
            <div className="flex flex-wrap justify-center lg:mx-60">
                {testimonials.map((ele, index) =>
                    <div key={index} className=" w-full lg:w-1/3 sm:w-1/2 px-4 py-2 ">
                        <div className="p-6 bg-neutral-800 border border-neutral-900 rounded-lg font-thin">
                            <p >{ele.text}</p>
                            <div className="flex mt-6 items-center" >
                                <img className="rounded-full mr-6" src={ele.image} width={50} alt="user" />
                                <div >
                                    <h6>{ele.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{ele.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
            </div>
        </div>
    )
}
