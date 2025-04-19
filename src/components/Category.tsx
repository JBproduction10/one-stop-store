'use client';

import React from 'react';
import { Button } from './ui/button';
import { categories } from '@/lib/data';
import Image from 'next/image';

const Category = () => {
  const CategoryCard = ({ category }: { category: (typeof categories)[0] }) => (
    <div className="group relative min-w-[80%] snap-start shrink-0 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="aspect-[4/5] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={400}
          height={500}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        <Button
          variant="outline"
          className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black transition-colors !rounded-button whitespace-nowrap cursor-pointer"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1440px] px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>

        {/* Mobile: swipeable carousel */}
        <div className="block sm:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 no-scrollbar touch-pan-x">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
