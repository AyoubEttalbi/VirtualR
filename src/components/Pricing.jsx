import React from 'react';
import { pricingOptions } from '../constants/index';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
    return (
        <div className="flex flex-col justify-center border-b border-neutral-700  items-center mt-6 lg:mt-20">
            <h1 className="text-center text-7xl my-20">Pricing</h1>
            <div className="flex flex-wrap justify-center items-center">
                {pricingOptions.map((ele, index) => (
                    <div
                        className="flex justify-center items-center mx-5 border border-neutral-700 p-10 rounded-3xl w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem] mb-10"
                        key={index}
                    >
                        <div className="text-center">
                            <p className="mb-5 text-5xl">{ele.title}{ele.title === "Pro" && (
                                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                    (Most Popular)
                                </span>
                            )}</p>
                            <p className="my-5 text-3xl">
                                {ele.price}
                                <span className="text-neutral-400 text-xl tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {ele.features.map((feature, i) => (
                                    <li key={i} className="flex items-center my-5">
                                        <CheckCircle2 className="mr-2" />
                                        <p>{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full h-12 p-3 mt-10 text-xl text-white  hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
