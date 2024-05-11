import Image from "next/image";

export default function StepOnePage() {
    return (
        <div className="flex flex-col justify-center items-center lg:p-9 md:p-9 p-3">
            <section className="banner bg-cover bg-center lg:w-3/4 md:w-3/4 w-full h-[600px] rounded-[20px] py-10 lg:px-5 md:px-5 px-1 flex flex-col justify-center" id="banner-div">
                <div className="inner-wrapper">
                    <div className="container p-0">
                        <div className="bg-img"
                            style={{
                                backgroundImage: "url('https://i.ibb.co/0YwfcwP/Group-306.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "fixed",
                                padding: "40px",
                                borderRadius: "20px",
                                height: "600px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "30px 0",
                            }}  >
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-1/2">
                                    <div className="content">
                                        <h1 className="lg:text-6xl md:text-6xl text-4xl font-medium text-white mb-4 font-sans">
                                            PROPERTY VALUATION CALCULATOR
                                        </h1>
                                        <p className="text-lg text-white mb-8">
                                            Find Comfort in the House with us, want to find a home. We are Ready
                                            to Help you Wholeheartedly Based on what you Need
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="user-column">
                                                {/* <div className="user-img"><Image alt="image" width={100} height={1000} src="https://i.ibb.co/rwf5Mpk/Group-10-2.png" /> </div> */}
                                            </div>
                                            {/* <div className="user-column">
                                                <div className="realtime-text">
                                                    <p className="text-lg text-gray-500">
                                                        <span className="quantity">50k+</span> realtime users
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="condos lg:w-3/4 md:w-3/4 w-full pt-10 h-full" id="condons-div">
                <div className="inner-wrapper text-black">
                    <div className="container">
                        <div className="section-title mb-5">
                            <h2 className="font-sans font-medium md:text-4xl lg:text-4xl text-2xl text-center">Condo Living:<br />Where Luxury Meets Convenience</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                            <div className="col h-96 ">
                                <div className="bg-[url('/Group-277.png')] h-full w-full bg-cover box-div relative rounded-2xl">
                                    <div className="inner-div w-5/6 bg-white p-5 flex flex-col items-center rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2">
                                        <h3 className="card-title text-xl font-medium font-sans mb-3">Condo</h3>
                                        <a href="#" className="bg-[#FE692A] px-5 py-2 rounded-2xl text-white text-sm font-medium font-sans">Get your Condo Valuation</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col h-96">
                                <div className="bg-[url('/Group-210.png')] h-full w-full bg-cover box-div rounded-2xl relative"
                                >

                                    <div className="inner-div w-5/6 bg-white p-5 flex flex-col items-center rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2">
                                        <h3 className="card-title text-xl font-medium font-sans mb-3">Landed</h3>
                                        <a href="#" className="bg-[#FE692A] px-5 py-2 rounded-2xl text-white text-sm font-medium font-sans">Get your Condo Valuation</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col h-96">
                                <div className="bg-[url('/Rectangle-45.png')] h-full w-full bg-cover box-div rounded-2xl relative"
                                >

                                    <div className="inner-div w-5/6 bg-white p-5 flex flex-col items-center rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2">
                                        <h3 className="card-title text-xl font-medium font-sans mb-3">HDB</h3>
                                        <a href="#" className="bg-[#FE692A] px-5 py-2 rounded-2xl text-white text-sm font-medium font-sans">Get your Condo Valuation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="stuff w-full" id="stuff-div">
                <div className="stuff-wrapper">
                    <div className="container-fluid p-0">
                        <div className="flex justify-center relative" style={{ alignItems: 'center' }}>
                            <div className="" style={{marginLeft:"-100px"}}>
                                <div className="inner-img w-full">
                                    <img src="https://i.ibb.co/cbKJspQ/Group-308-1.png" alt="" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="w-full h-full inner-content-dv bg-blue-700 text-white p-12 rounded-xl">
                                    <div className="stuff-title">
                                        <h2 className="text-5xl font-sans font-medium mb-10">All the Stuff You Need and None That You Lorem Ipsum</h2>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8" style={{ rowGap: '30px' }}>
                                        {[1, 2, 3, 4, 5, 6].map(index => (
                                            <div key={index} className="col">
                                                <div className="stuff-inner-content">
                                                    <h4 className="text-xl">Lorem Ipsum</h4>
                                                    <p className="text-base">Dummy text</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="m-btn mt-8">
                                        <a href="#" className="bg-orange-500 py-3 px-6 rounded-full text-white text-lg font-semibold">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>



    )
}