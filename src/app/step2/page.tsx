export default function stepTwoPage() {
  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-[url('/Group-309.png')] bg-cover w-3/4 mx-auto h-[800px] mt-10 border rounded-3xl px-4 py-5"
        id="banner-div"
      >
        <div className="inner-wrapper">
          <div className="content-div-banner w-1/2 mt-10 ms-10">
            <p className="sub-heading text-white">Lorem ipsum</p>
            <h1 className="text-6xl text-white font-medium my-3">
              PROPERTY VALUATION CALCULATOR
            </h1>
            <p className="sub-text text-white">
              The data is based on registered resale applications and is updated
              daily. Use this calculator to determine how much you could
              potentially sell your own property .
            </p>
            <div className="banner-btn-wrapper w-52 rounded-full h-16 items-center flex justify-center mt-10 text-white bg-[#0f2c49]">
              <a href="#">
                Calculate <span className="btn-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[420px] my-10 w-full">
        <div className="grid grid-cols-3 gap-2 w-2/3 mx-auto h-full">
          <div className="h-full bg-no-repeat bg-[url('/Rectangle-51.png')]"></div>
          <div className="h-full bg-no-repeat bg-[url('/Rectangle-53.png')]"></div>
          <div className="h-full bg-no-repeat bg-[url('/Rectangle-50-1.png')]"></div>
        </div>
      </section>
    </div>
  );
}
