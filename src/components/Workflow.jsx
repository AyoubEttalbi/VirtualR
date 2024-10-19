import React from 'react'
import code from '../assets/code.jpg'
import {checklistItems} from '../constants/index'
import { CheckCircle2 } from 'lucide-react'
export default function Workflow() {
  return (
    <div className="flex justify-center items-center flex-col my-20 border-b border-neutral-700">
        <p className="text-center text-orange-600 my-20  rounded-full">WORKFLOW</p>
        <div className="mb-10 "><h1 className="lg:text-7xl sm:text-5xl text-4xl">Accelerate your <span className="bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text">coding workflow</span></h1></div>
        <div className="flex justify-center items-center flex-wrap">
            <img src={code} alt="code" width={600} height={150}/>
            <div className="flex justify-center items-center flex-col">
                {checklistItems.map((ele,index)=>
                    <div key={index} className="flex mb-12"> 
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 p-2 flex justify-center items-center rounded-full"><CheckCircle2 /></div>
                        <div className=""><h5 className="mb-3">{ele.title}</h5> <p className=" text-neutral-500 w-96">{ele.description}</p></div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
