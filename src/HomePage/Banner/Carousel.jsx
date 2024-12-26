
const Carousel = ({image,text,article}) => {
    return (
    <div
    className=' font-qs bg-center bg-cover h-[70vh]'
    style={{
      backgroundImage: `url(${image})`
    }}
  >
    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          {article}
        </h1>
        <br />
        <h2 className=" text-gray-200 lg:text-xl mx-auto px-4 md:w-2/3">{text}</h2>
        <br />
        
      </div>
    </div>
  </div>
    );
}

export default Carousel;
