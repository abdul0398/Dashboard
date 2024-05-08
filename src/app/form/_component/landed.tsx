'use client'
import Select from 'react-select'

export default function Landed() {

    const projectOption = [{
        value: "Hello",
        label: "Hello"
    }]

    const reqOptions = [
        {
            value: "Past transactions report around the street",
            label: "Past transactions report around the street"
        },
        {
            value: "My estimated selling price",
            label: "My estimated selling price"
        },
        {
            value: "Get a gauge how much buyer are willing to offer",
            label: "Get a gauge how much buyer are willing to offer"
        }

    ]

    const planOptions = [
        {
            value: "Downsize",
            label: "Downsize"
        },
        {
            value: "Change of location",
            label: "Change of location"
        },
        {
            value: "Upgrade",
            label: "Upgrade"
        }, {
            value: "Cash out",
            label: "Cash out"
        }

    ]

    return (
        <div>
            <div className='mt-5'>
                <p className='mb-2'>1. Please select the street</p>
                <Select
                name='streets'
                    placeholder={"Select street"}
                    options={projectOption}
                />
            </div>

            <div className='mt-5'>
                <p className='mb-2'>2. Your sqft</p>
                <input name='sqft' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#303dd7]" type="text" placeholder='Sqft' />
            </div>

            {/* <div className='mt-5'>
                <p className='mb-2'>3. I would Like to Know?</p>
                <div className="flex flex-col gap-3 w-fit">
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="condo">Past transactions report around the street</span>
                    </div>
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="landed">My estimated selling price</span>
                    </div>
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="hdb">Get a gauge how much buyer are willing to offer</span>
                    </div>
                </div>
            </div> */}
            <div className='mt-5'>
                <p className='mb-2'>3. I would Like to Know?</p>
                <Select
                name='request'
                    placeholder={"Select Option"}
                    options={reqOptions}
                />
            </div>
            {/* <div className='mt-5'>
                <p className='mb-2'>4. What are your plans?</p>
                <div className="flex gap-3 w-fit flex-col lg:flex-row md:flex-row">
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="condo">Downsize</span>
                    </div>
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="landed">Change of location</span>
                    </div>
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="hdb">Upgrade</span>
                    </div>
                    <div className={`cursor-pointer h-11 px-3 flex justify-center items-center min-w-48 rounded-full border border-[#303dd7] hover:bg-[#303dd7] hover:text-white`}>
                        <span data-id="hdb">Cash out</span>
                    </div>
                </div>
            </div> */}

            <div className='mt-5'>
                <p className='mb-2'>4. What are your plans?</p>
                <Select
                    name='plans'
                    placeholder={"Select Option"}
                    options={planOptions}
                />
            </div>

            <div className='mt-5'>
                <p className='mb-2'>
                    Please fill up your details and you will be able to retrieve an automated LIVE report extracted base on URA data points.
                </p>
            </div>
        </div>
    )
}