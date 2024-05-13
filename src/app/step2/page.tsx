export default function stepTwoPage() {
  return (
    <div className="px-2">
      <section
        className="bg-center bg-no-repeat bg-[url('/Group-309.png')] bg-cover lg:w-3/4 md:w-3/4 w-full px-5 mx-auto h-[800px] mt-10 border rounded-3xl py-5"
        id="banner-div"
      >
        <div className="inner-wrapper">
          <div className="content-div-banner w-1/2 mt-10 ms-10">
            <p className="sub-heading text-white">Lorem ipsum</p>
            <h1 className="lg:text-6xl md:text-4xl text-4xl  text-white font-medium my-3">
              PROPERTY VALUATION CALCULATOR
            </h1>
            <p className="sub-text text-white">
              The data is based on registered resale applications and is updated
              daily. Use this calculator to determine how much you could
              potentially sell your own property .
            </p>
            <div className="banner-btn-wrapper lg:w-52 md:w-52 w-40 rounded-full lg:h-16 md:h-16 h-12 items-center flex justify-center mt-10 text-white bg-[#0f2c49]">
              <a href="#">
                Calculate <span className="btn-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[420px] my-10 w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-5 lg:w-[1300px] md:w-[1300px] mx-auto h-full">
          <div className="bg-no-repeat bg-[url('/Rectangle-51.png')] bg-cover bg-center relative rounded-3xl h-[400px]">
            <div className="border rounded-full h-20 flex justify-center items-center absolute w-52 bg-[#f56c1d] text-white bottom-0 right-0">
              Condo
            </div>
          </div>
          <div className="relative bg-no-repeat bg-[url('/Rectangle-53.png')] bg-cover bg-center rounded-3xl h-[400px]">
            <div className="border rounded-full h-20 flex justify-center items-center absolute w-52 bg-[#0f2c49] text-white bottom-0 right-0">
              Landed
            </div>
          </div>
          <div className="relative bg-no-repeat bg-[url('/Rectangle-50-1.png')] bg-cover bg-center  rounded-3xl h-[400px]">
            <div className="border rounded-full h-20 flex justify-center items-center absolute w-52 bg-[#0f2c49] text-white bottom-0 right-0">
              HDB
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-center bg-no-repeat bg-[#fcf5f1] bg-cover lg:w-2/3 md:w-2/3 w-full md:px-5 lg:px-5 mx-auto h-[800px] relative mt-10 shadow-xl rounded-3xl py-5"
        id="banner-div"
      >
        <div className="inner-wrapper">
          <div className="content-div-banner w-1/2 mt-10 ms-10">
            <p className="sub-heading text-white">Lorem ipsum</p>
            <h1 className="lg:text-6xl md:text-4xl text-4xl  text-white font-medium my-3">
              PROPERTY VALUATION CALCULATOR
            </h1>
            <p className="sub-text text-white">
              The data is based on registered resale applications and is updated
              daily. Use this calculator to determine how much you could
              potentially sell your own property .
            </p>
          </div>
        </div>
        <div className="bottom-5 md:right-5 lg:right-5 bg-[url('/Rectangle-17-3.png')] md:w-1/2 w-full lg:w-1/2 h-80 rounded-3xl absolute bg-no-repeat bg-cover"></div>
      </section>
    </div>
  );
}
