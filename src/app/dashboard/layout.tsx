'use client'
import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const btnref = useRef<HTMLButtonElement>(null)
    
    const pathname = usePathname()
    const navigation = [
        { name: 'NewListing', href: '/dashboard/listings', current: pathname === '/dashboard/listings' },
        { name: 'HDB Rental Transaction', href: '/dashboard/hbd-market-rental-rates', current: pathname === '/dashboard/hbd-market-rental-rates' },
        { name: 'Condo Rentals Transaction', href: '/dashboard/condo-rental-rates', current: pathname === '/dashboard/condo-rental-rates' },
        { name: 'URA Developer Sales Data', href: '/dashboard/ura-dev-sales', current: pathname === '/dashboard/ura-dev-sales' },
        { name: 'Balance Units', href: '/dashboard/balance-units', current: pathname === '/dashboard/balance-units' },
        { name: 'Condo & EC Transactions', href: '/dashboard/condo-ec-transactions', current: pathname === '/dashboard/condo-ec-transactions' },

    ]
    return (
        <div className='h-full w-full'>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <Disclosure.Button ref={btnref} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        console.log("Hello")
                                                        btnref.current?.click()
                                                        window.location.href = item.href
                                                    }}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium w-full text-left'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <button 
                                    key={item.name}
                                    className={classNames(
                                        pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium w-full text-left'
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        console.log("Hello")
                                        btnref.current?.click()
                                        window.location.href = item.href
                                    }}

                                    >

                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {children}
        </div>
    )
}
