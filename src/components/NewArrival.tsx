import React from 'react'
import { Button } from './ui/button';
import {FaArrowRight} from "react-icons/fa";
import Link from 'next/link';
import ProductCard from './shared/Card';


const NewArrivals = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto max-[1440px] px-6'>
            <div className='flex justify-between items-center mb-12'>
                <h2 className='text-3xl font-bold'>New Arrivals</h2>
                <Button
                    variant="outline"
                    className='border-gray-300 !rounded-bottom whitespace-nowrap cursor-pointer'
                >
                    <Link href="/shop">View All</Link>
                    <FaArrowRight className=" ml-2 text-xs"/>
                </Button>
            </div>

            <ProductCard/>
        </div>
    </div>
  )
}

export default NewArrivals;