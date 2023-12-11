import { aboutData } from '@/Constants/AboutData'
import Image from 'next/image'
import React from 'react'
import CarIcon from '../public/CarIcon'
import womanParked from '../public/womanParked.jpg'
import guyParked from '../public/guyPArked.jpg'
import Getcolor from '@/Constants/GetColors'

const About = () => {
    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="z-20 flex flex-1w-full flex-col lg:w-[60%]">
                    <div className='relative'>
                        <CarIcon />
                        <h2 className="bold-40 lg:bold-64">About Us</h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
                        {aboutData.map((about) => (
                            <AboutItem
                                key={about.title}
                                title={about.title}
                                description={about.description}
                            />
                        ))}
                    </ul>
                </div>
                <div className="relative flex flex-1 lg:min-h-[700px] items-start justify-center">
                    <Image
                        src={womanParked}
                        alt="parked woman"
                        width={440}
                        height={1000}
                        className="rounded-full feature-phone"
                    />
                    <Image
                        src={guyParked}
                        alt="parked guy"
                        width={200}
                        height={500}
                        className="rounded-full relative flex  "
                    />
                </div>
            </div>
        </section>
    )
}

type AboutItem = {
    title?: string;
    description: string;
}

const AboutItem = ({ title, description }: AboutItem) => {
    return (
        <div className={`bg-${Getcolor(1)} p-8`}>
            <li className="flex flex-1 w-full flex-col items-start">
                <h2 className="bold-20 text-white lg:bold-32 mt-5 capitalize">
                    {title}
                </h2>
                <p className="regular-16 mt-5 text-black-500 lg:mt-[30px] lg:bg-none">
                    {description}
                </p>
            </li>
        </div>

    )
}

export default About