import React from 'react'
import { features } from "../constants/index"
function FeatureFection() {
  return (
    <div className="relative border-b border-neutral-800 lg:my-24 min-h-[800px]">
      <p className="text-center text-orange-600 mb-20  rounded-full">FEATURE</p>
      <div className="flex flex-wrap justify-center items-center">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center tracking-wide mb-10">Easily build <span className="text-center bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your code</span></h1>
      </div>
      <div className="flex justify-center flex-wrap mt-20 lg:mt-20 lg:px-48 md:px-10 px-0">
        {features.map((feature,index) =>
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">{feature.icon}</div> 
              <div className="">
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500 w-80">{feature.description}</p>
              </div>
              
            </div>
            
          </div>
        )}
      </div>
    </div>
  )
}


export default FeatureFection
