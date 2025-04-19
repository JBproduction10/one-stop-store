import Link from 'next/link';
import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 pt-16 pb-8'>
        <div className='container mx-auto max-w-[1440px] px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                <div>
                    <h3 className='text-xl font-bold text-white mb-6'>OneStopShop</h3>
                    <p className='mb-6 text-sm leading-relaxed'>
                        Premium fashion destination offering curated collections of contempory styles for the modern individual.
                    </p>
                    <div className='flex space-x-4'>
                        <Link href="/" className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                            <FaFacebookF/>
                        </Link>
                        <Link href="/" className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                            <FaInstagram/>
                        </Link>
                        <Link href="/" className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                            <FaTwitter/>
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className='text-white font-semibold mb-6'>SHOPPING</h4>
                    <ul className='space-y-3 text-sm'>
                        <li>
                            <Link
                                href="/"
                                className='hover:text-white transition-colors cursor-pointer'
                            >Women's Collection</Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className='hover:text-white transition-colors cursor-pointer'
                            >Men's Collection</Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className='hover:text-white transition-colors cursor-pointer'
                            >Accessories</Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className='hover:text-white transition-colors cursor-pointer'
                            >New Arrivals</Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className='hover:text-white transition-colors cursor-pointer'
                            >Sale</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-white font-semibold mb-6'>INFORAMATION</h4>
                    <ul className='space-y-3 text-sm'>
                        <li>
                            <Link href="" className='hover:text-white transition-colors cursor-pointer'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-white transition-colors cursor-pointer'>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-white transition-colors cursor-pointer'>
                                Shipping & Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-white transition-colors cursor-pointer'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-white transition-colors cursor-pointer'>
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-white font-semibold mb-6'>NEWSLETTER</h4>
                    <p className='mb-4 text-sm'>
                        Subscribe to receive updates, access to exclusivedeals, and more.
                    </p>
                    <div className='flex flex-col space-y-3'>
                        <Input
                            type='email'
                            value="email"
                            placeholder='Your email address'
                            className='bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-b-gray-600 focus:ring-0'
                        />
                        <Button className='bg-white text-black hover:bg-gray-200 !rounded-button whitespace-nowrap cursor-pointer'>
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
            </div>

            <Separator className='bg-gray-800 my-8'/>

            <div className='flex flex-col md:flex-row justify-between items-center'>
                <p className='text-sm mb-4 md:mb-0'>
                    &copy; 2025 All rights reserved.
                </p>
                <div className='flex space-x-4'>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                    <i className='fab fa-ccc-visa text-2xl'></i>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;