import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import {LearnButton} from "../components/LearnButton"

const SpecialOffer = () => {
  return (
    <section id="" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        
        <div className="flex-1">
          <img 
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          />
        </div>
        
        <div className="flex-1 flex-col">
          <h2 className="font-palanquin text-4xl font-bold">
            <span className="text-coral-red"> Special</span> Offer
          </h2>
          <p className="mt-4  info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className="mt-6 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        
          <div className="mt-11 flex flex-wrap gap-4">
              <div className="">
              <Button label="Shop Now" iconURL={arrowRight} />
            </div>

            <div className="">
              <LearnButton 
              label="Learn More" 
              backgoundColor="bg-white"
              />
            </div>
          </div>

        </div>

   </section>
  )
}

export default SpecialOffer