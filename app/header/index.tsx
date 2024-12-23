export default function() {
  return <div>
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Find Your Painting style!
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
            Want to know what your painting style is? Want to know the style and period of the work on the picture or even the author and name? Try this software！
            </p>
            {/* Hero Button */}
            <a
              href="#"
              className="mb-6 mr-6 w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8"
            >
              Get Started
            </a>
            {/* Hero Comment */}
            <div className="max-w-xs">
              <p className="mb-4 text-sm text-gray-500">
              Here you can find the style of painting you want and learn about it！
              </p>
              <div className="flex items-center gap-11 sm:flex-row">
                <div className="flex items-center">
                  
                  <p className="text-sm font-bold"></p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 text-sm font-bold">5.0</p>
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    className="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    className="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    className="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    className="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    className="mr-1.5 inline-block w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src=" https://pic.rmb.bdstatic.com/bjh/events/d3af2bb9b880fb6e39ddce621285a3cc7950.jpeg@h_1280"
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </header>
  </div>;
}