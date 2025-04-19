// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {  FaStar } from "react-icons/fa";

const SingleProduct: React.FC = () =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    // const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("silver");
    // const [selectedSize, setSelectedSize] = useState("M");
    // const [isWishlisted, setIsWishlisted] = useState(false);
    // const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    // const [isSearchOpen, setIsSearchOpen] = useState(false);
    // const [wishlistItems, setWishlistItems] = useState([
    //     {
    //       id: 1,
    //       name: "Silver High Neck Sweater",
    //       price: 59.99,
    //       image:
    //         "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20front%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=80&height=80&seq=11&orientation=squarish",
    //     },
    // ]);
    // const removeFromWishlist = (id: number) => {
    //     setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    // };

    // const addToCart = (item:any) =>{
    //     // Add to cart logic
    //     setIsWishlistOpen(false);
    //     setIsCartOpen(true);
    // };

    // Close dropdown when clicking outside
    // React.useEffect(() => {
        // const handleClickOutside = (event: MouseEvent) => {
            // const userMenu = document.getElementById('userDropdownMenu');
            // const userButton = document.getElementById('userMenuButton');
            // const cartDropdown = document.getElementById('cartDropdown');
            // const cartButton = document.getElementById('cartButton');
            // const searchButton = document.getElementById('searchButton');
            // const searchInput = document.getElementById('searchInput');

            // if(
            //     isSearchOpen &&
            //     event.target instanceof Node &&
            //     searchButton &&
            //     searchInput &&
            //     !searchButton.contains(event.target) &&
            //     !searchInput.contains(event.target)
            // ){
            //     setIsSearchOpen(false);
            // }

            // if(
            //     userMenu &&
            //     userButton &&
            //     !userMenu.contains(event.target as Node) &&
            //     !userButton.contains(event.target as Node)
            // ){
            //     setIsUserMenuOpen(false)
            // }

            // if(cartDropdown &&
            //     cartButton &&
            //     !cartDropdown.contains(event.target as Node) &&
            //     !cartButton.contains(event.target as Node)
            // ){
            //     setIsCartOpen(false);
            // }

            // const wishlistDropdown = 
            // document.getElementById("wishlistDropdown");
            // const wishlistButton =
            // document.getElementById("wishlistButton");
            // if(wishlistDropdown &&
            //     wishlistButton &&
            //     !wishlistDropdown.contains(event.target as Node) &&
            //     !wishlistButton.contains(event.target as Node)
            // ){
            //     setIsWishlistOpen(false);
            // }
        // }
        // document.addEventListener("mousedown",
        //     handleClickOutside
        // );
        // return () => {
        //     document.removeEventListener("mousedown",
        //         handleClickOutside);
        // }
    // },[]);

    const colors = [
        { id: "silver", name: "Silver", value: "#C0C0C0" },
        { id: "black", name: "Black", value: "#000000" },
        { id: "white", name: "White", value: "#FFFFFF" },
        { id: "gray", name: "Gray", value: "#808080" },
    ];
    // const sizes = ["XS", "S", "M", "L", "XL"];
    // const relatedProducts = [
    //     {
    //       id: 1,
    //       name: "Cashmere Turtleneck Sweater",
    //       price: 79.99,
    //       image:
    //         "https://readdy.ai/api/search-image?query=elegant%20cashmere%20turtleneck%20sweater%20in%20beige%20color%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=1&orientation=portrait",
    //     },
    //     {
    //       id: 2,
    //       name: "Wool Blend Cardigan",
    //       price: 64.99,
    //       image:
    //         "https://readdy.ai/api/search-image?query=stylish%20wool%20blend%20cardigan%20in%20light%20gray%20color%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=2&orientation=portrait",
    //     },
    //     {
    //       id: 3,
    //       name: "Ribbed Cotton Pullover",
    //       price: 49.99,
    //       image:
    //         "https://readdy.ai/api/search-image?query=modern%20ribbed%20cotton%20pullover%20in%20navy%20blue%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=3&orientation=portrait",
    //     },
    //     {
    //       id: 4,
    //       name: "Merino Wool Sweater",
    //       price: 69.99,
    //       image:
    //         "https://readdy.ai/api/search-image?query=luxurious%20merino%20wool%20sweater%20in%20dark%20green%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=400&height=500&seq=4&orientation=portrait",
    //     },
    // ];
    const productImages = [
        "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20front%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=800&height=1000&seq=5&orientation=portrait",
        "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20side%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=800&height=1000&seq=6&orientation=portrait",
        "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20back%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=800&height=1000&seq=7&orientation=portrait",
        "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20detail%20view%20of%20fabric%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=800&height=1000&seq=8&orientation=portrait",
    ];
    // const incrementQuantity = () => {
    //     setQuantity(quantity + 1);
    // }
    // const decrementQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };
    // const toggleWishlist = () => {
    //     setIsWishlisted(!isWishlisted);
    // };

    return(
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="text-sm mb-6">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link href="/" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-400"></span>
                            <Link href="/" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                                Products
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <span className="mx-2 text-gray-400"></span>
                            <span className="text-gray-900 font-medium">
                                Silver High Neck Sweater
                            </span>
                        </li>
                    </ol>
                </nav>
                {/* Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="flex flex-col gap-2 lg:space-y-4">
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[Navigation, Thumbs]}
                            className="product-main-slider rounded-lg overflow-hidden"
                        >
                            {productImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative pb-[125%] bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Silver High Neck Sweater - View ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[Navigation, Thumbs]}
                            className="product-thumbs-slider"
                        >
                            {productImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative pb-[100%] bg-gray-100 rounded cursor-pointer overflow-hidden border-2 border-transparent hover:border-blue-500">
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <Badge
                                variant="outline"
                                className="mb-2 text-blue-600 bg-blue-50 border-blue-200"
                            >
                                New Arrival
                            </Badge>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Silver High Neck Sweater
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={`${<FaStar/>} ${star <= 4 ? "text-yellow-400" : star <= 4.5 ? "text-yellow-400": "text-gray-300"}}`}
                                        />
                                    ))}
                                    <span className="ml-1 text-sm text-gray-600">4.5/5</span>
                                </div>
                                <span className="text-sm text-gray-500">(128 reviews)</span>
                            </div>
                            <div className="flex items-center space-x-3 mb-2">
                                <span className="text-2xl font-bold text-gray-900">$49.99</span>
                                <span className="text-lg text-gary-500 line-through">$69.99</span>
                                <Badge className="bg-red-500 text-white">-25%</Badge>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Elevate your wardrobe with our premium Sliver High Neck Sweater.
                                Crafted from a luxirious blend of materials, this sweater offers
                                both comfort and style for the modern fashion enthusiat.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {/* Color Selection */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-3">
                                    Color
                                </h3>
                                <div className="flex space-x-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.id}
                                            onClick={() =>
                                                setSelectedColor(color.id)
                                            }
                                            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
                                                ${selectedColor === color.id ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}
                                                title={color.name}
                                        >
                                            <span
                                                className="w-8 h-8 rounded-full"
                                                style={{
                                                    backgroundColor: color.value,
                                                    border:
                                                        color.id === "white" ? "1px solid #e5e7eb" : "none",  
                                                }}
                                            ></span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Size Selection */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </main> 
        </div>
    )
}

export default SingleProduct;