const AboutTeam = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 ">
      <div className="container flex flex-col-reverse justify-center  mx-auto sm:py-12  lg:flex-row lg:justify-between">
        <div className="flex flex-col p-6 text-center rounded-sm lg:w-5/12 lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl">
            We bring the
            <span className="text-lime-500"> changes you</span> want to see
          </h1>

          <div className="flex flex-col divide-y font-fs dark:divide-gray-300 mt-16 space-y-6  text-start">
            <details>
              <summary className="py-2 text-xl font-semibold  outline-none cursor-pointer focus:underline">
                Greate Community
              </summary>
              <div className="px-6 pb-4 text-xl">
                <p>
                  We engage more people to our projects and activity to spread a
                  word about our organization. We stand for expanding our
                  activity all over the world to protect our planet.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-xl font-semibold  outline-none cursor-pointer focus:underline">
                Lost Of Projects
              </summary>
              <div className="px-6 pb-4 text-xl">
                <p>
                  We constantly work on promoting our projects and to engaging
                  more people to them. We believe that our strength is in our
                  cohesion and our joint efforts.
                </p>
              </div>
            </details>
            <details className="">
              <summary className="py-2 text-xl font-semibold outline-none cursor-pointer focus:underline">
                Nature of Technology
              </summary>
              <div className="px-6 pb-4 space-y-2 text-xl">
                <p>
                  Nowadays technogenic world harms a lot to our planet. We work
                  on minimization of its influence and hope we can save our
                  nature for centuries.
                </p>
              </div>
            </details>
            <div className="flex justify-start items-center space-x-8">
                <img src="https://i.ibb.co.com/58LLH0t/img1.png" alt="" className="mt-10 object-cover object-center"/>
                <img src="https://i.ibb.co.com/Vv65t34/img2.png" alt="" className="mt-10 object-cover object-center"/>
                <img src="https://i.ibb.co.com/fCVn6zg/img3.png" alt="" className="mt-10 object-cover object-center"/>
            </div>
          </div>
        </div>
        <div className="flex items-center hover:shadow-custom-light hover:scale-105 -translate-y-1 duration-300 ease-in-out justify-center p-6 mt-8 lg:mt-0 lg:w-7/12">
          <img
            src="https://i.ibb.co.com/HgxXVBR/eco.jpg"
            alt=""
            className="object-contain rounded-xl w-full border border-lime-500 "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
