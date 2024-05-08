'use client'
import Select from 'react-select'
import { town_StreetRelation, town_blockRelation } from '@/data/constants'
import { useState } from 'react'
import { data } from '@/types/data'


export default function Hdb() {
    const [dataObj, setData] = useState({
        towns: Object.keys(town_StreetRelation).map(item => {
            return {
                value: item,
                label: item
            }
        }),
        streets: [] as data[],
        blocks: [] as data[],
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
    const flattype = [
        {
            value: "2 - Room",
            label: "2 - Room"
        },
        {
            value: "3 - Room",
            label: "3 - Room"
        },
        {
            value: "4 - Room",
            label: "4 - Room"
        },
        {
            value: "Executive/Multi-Generation",
            label: "Executive/Multi-Generation"
        }
    ]


    const handleTownChange = (obj: any) => {
        const streets = town_StreetRelation[obj.value];
        const blocks = town_blockRelation[obj.value];


        setData((prev) => {
            // Correcting the typo in 'label' and ensuring the state update logic is correct
            return {
                towns: prev.towns,
                streets: streets.map(item => ({
                    value: item,
                    label: item
                })),
                blocks: blocks.map(item=>({
                    value:item,
                    label:item
                }))
            };
        });
    }
    return (
        <div>
            <div className='mt-5'>
                <p className='mb-2'>1. Where is your Hdb located?</p>
                <Select
                    name='located'
                    placeholder={"Select Town"}
                    options={dataObj.towns}
                    onChange={(e) => handleTownChange(e)}
                />

            </div>
            <div className='mt-5'>
                <p className='mb-2'>2. What is your Street Name?</p>
                <Select
                    name='streetName'
                    placeholder={"Select Name"}
                    options={dataObj.streets}
                />

            </div>
            <div className='mt-5'>
                <p className='mb-2'>3. Block No (BLK)? *</p>
                <Select
                    name='blk'
                    placeholder={"Block Number"}
                    options={dataObj.blocks}
                />

            </div>
            <div className='mt-5'>
                <p className='mb-2'>4. HDB Flat Type? *</p>
                <Select
                    name='flatType'
                    placeholder={"Choose Flat Type"}
                    options={flattype}

                />

            </div>
            <div className='mt-5'>
                <p className='mb-2'>5. Are you looking to sell your property? *</p>
                <Select
                    name='sellDuration'
                    placeholder={"Select Project"}
                    options={months}
                    value={{
                        value: "6-12 months",
                        label: "6-12 months"
                    }}
                />

            </div>

            <div className='mt-5'>
                <p className='mb-2'>6. What is your unit number?</p>
                <input name='units' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#303dd7]" type="text" placeholder='#00' />
            </div>

            <div className='mt-5'>
                <p className='mb-2'>
                    Please fill up your details and you will be able to retrieve an automated LIVE report extracted base on URA data past transaction reports and a precise property valuation for your unit.
                </p>
            </div>
        </div>
    )
}