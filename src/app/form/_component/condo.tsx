'use client'
import { allProjects } from '@/data/constants'
import Select from 'react-select'
import WindowedSelect from "react-windowed-select";
export default function Condo() {
    const projectOption = allProjects.map(project=>{
        return {
            value:project,
            label:project
        }
    })
    const months = [
        {
            value: "0-3 months",
            label: "0-3 months"
        },
        {
            value: "1-3 months",
            label: "1-3 months"
        },
        {
            value: "6-12 months",
            label: "6-12 months"
        },
        {
            value: "Exploring options",
            label: "Exploring options"
        }
    ]
    return (
        <div>
            <div className='mt-5'>
                <p className='mb-2'>1. Project Name</p>
                <WindowedSelect
                    placeholder={"Select Project"}
                    options={projectOption}
                    name='projectName'
                    windowThreshold={50}
                />

            </div>

            <div className='mt-5'>
                <p className='mb-2'>2. Blk</p>
                <input name='blk' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#303dd7]" type="text" placeholder='#00' />
            </div>
            <div className='mt-5'>
                <p className='mb-2'>3. When do you plan to sell you property?</p>
                <Select
                    placeholder={"Select"}
                    options={months}
                    name='sellDuration'
                />

            </div>
            <div className='mt-5'>
                <p className='mb-2'>4. What is your unit number?</p>
                <input name='units' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#303dd7]" type="text" placeholder='#_=_' />
            </div>

            <div className='mt-5'>
                <p className='mb-2'>
                    This reports uses reliable sources like URA trends, transaction reports, and X-Value for quick and precise property estimated valuations and provides your unit report. </p>
            </div>
        </div>


    )
}