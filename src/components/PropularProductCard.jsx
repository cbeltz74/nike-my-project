import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px]"
      />

      <div className="mt-8 gap-2.5">
          <div className="flex">
          <img src={star} alt="rating" width={25} height={25} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">{name}</h3>
          <p className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-coral-red">{price}</p>
      </div>

    </div>
  )
}

export default PopularProductCard