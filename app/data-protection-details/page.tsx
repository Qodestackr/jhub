"use client";
import React from 'react'
import { Tab } from '@headlessui/react';
import { classNames } from '../../utils/classes';

import LegalNotice from '../../components/LegalNotice/LegalNotice'
import CCPADisclosure from '../../components/CCPADisclosure/CCPADisclosure'
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import DataProtectionNotice from '../../components/DataProtectionNotice/DataProtectionNotice'
import CorporateInfo from '../../components/CorporateInfo/CorporateInfo'

const DataProtectionNoticeTabs = [
    'Corporate Info',
    'Legal Notice',
    'Privacy Policy',
    'Data Protection Notice',
    'CCPA Disclosure'
]

export default function page() {
    return (
        <section className='container'>
            <div>
                <h1 className='text-3xl md:text-4xl font-bold'>Data protection notice</h1>
                <p className='text-xl font-semibold'>Data protection notice of JHUB Africa</p>
            </div>

            <Tab.Group as='div'>

                <Tab.List className='flex space-x-1 rounded-xl p-1 w-full bg-body'>
                    {
                        DataProtectionNoticeTabs.map((dataProtectionTab, i) => (
                            <Tab key={i}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm md:font-medium font-thin leading-5',
                                        'ring-offset-2  outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow border border-none outline-none text-success'
                                            : 'text-white  outline-none hover:text-white'
                                    )
                                }>{dataProtectionTab}</Tab>
                        ))
                    }
                </Tab.List>

                <Tab.Panels>
                    <Tab.Panel>
                        <CorporateInfo />
                    </Tab.Panel>

                    <Tab.Panel>
                        <LegalNotice />
                    </Tab.Panel>

                    <Tab.Panel>
                        <PrivacyPolicy />
                    </Tab.Panel>

                    <Tab.Panel>
                        <DataProtectionNotice />
                    </Tab.Panel>
                    <Tab.Panel>
                        <CCPADisclosure />
                    </Tab.Panel>
                </Tab.Panels>

            </Tab.Group>
        </section>
    )
}
