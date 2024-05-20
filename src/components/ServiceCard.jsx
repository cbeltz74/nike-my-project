const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-xl px-12 py-16">
        <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
          <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
          />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className="mt-5 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard