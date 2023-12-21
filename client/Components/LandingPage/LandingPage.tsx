import Image from 'next/image'
import Button from '../Button'
import HeroCarImage from '../../public/HeroCarImage.jpg'
import CarIcon from '../../public/CarIcon'
import Getcolor from '@/Constants/GetColors'


const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="bold-52 lg:bold-88">Park Smart,
                    <span className={`text-${Getcolor(1)}`}> Park</span>Ease
                </h1>
                <CarIcon className="transition-transform transform hover:translate-x-40 ease-in-out duration-1000" />
                <p className={`regular-16 mt-6 text-${Getcolor(2)} xl:max-w-[520px]`}>
                    ParkEase simplifies the parking experience by enabling users to effortlessly find, reserve, and pay for parking spaces, ensuring a stress-free and efficient urban mobility solution.
                </p>
                <div className="my-11 flex flex-wrap gap-5">
                     <p className="bold-16 lg:bold-20 text-blue-70">243
                        <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
                    </p>
                </div>
                <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Reviews"
            icon='rating.svg'
            bgColor={`${Getcolor(1)}`}
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon='/work.svg'
            bgColor={`${Getcolor(1)}`}
          />
        </div>

               
            </div>

            <div className="relative flex flex-1 items-start justify-center">
                <Image
                    src={HeroCarImage}
                    alt="HeroCarImage"
                    width={400}
                    height={400}
                    className="rounded-full"
                />
            </div>
        </section>
    )
}

export default Hero