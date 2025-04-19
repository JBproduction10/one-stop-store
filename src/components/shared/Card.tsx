'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import { newArrivals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const ITEMS_PER_PAGE = 4;

const ProductCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newArrivals.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = newArrivals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {paginatedItems.map((product) => (
          <Card
            key={product.id}
            className="group relative border-none shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
              <Link href="/single-product/id">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                <Badge className="bg-white text-black hover:bg-gray-100 cursor-pointer">
                  <FaHeart className="text-gray-400 group-hover:text-red-500 transition-colors" />
                </Badge>
                {product.discount && (
                  <Badge className="bg-red-600 text-white !rounded-button">
                    {product.discount}
                  </Badge>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 flex justify-center mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <Button className="bg-white text-black hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
                  <FaShoppingBag className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 font-semibold">{product.price}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </Button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
