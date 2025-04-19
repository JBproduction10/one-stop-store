'use client'
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaCross, FaHeart, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";




const Header: React.FC = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Silver High Neck Sweater",
            price: 59.99,
            image:
            "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20front%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=80&height=80&seq=11&orientation=squarish",
        },
    ]);
    const removeFromWishlist = (id: number) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    };

    const addToCart = (item:any) =>{
        // Add to cart logic
        setIsWishlistOpen(false);
        setIsCartOpen(true);
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const userMenu =
                document.getElementById("userDropdownMenu");
            const userButton = 
                document.getElementById("userMenuButton");
            const cartDropdown = 
            document.getElementById("cartDropdown");
            const searchButton = 
            document.getElementById("searchButton");
            const searchInput = 
            document.getElementById("searchInput");

            if(
                isSearchOpen &&
                event.target instanceof Node &&
                searchButton &&
                searchInput &&
                !searchButton.contains(event.target) &&
                !searchInput.contains(event.target) &&
                !event.target.closest(".bg-white")
            ){
                setIsSearchOpen(false);
            }

            if(
                userMenu &&
                userButton &&
                !userMenu.contains(event.target as Node) &&
                !userButton.contains(event.target as Node)
            ){
                setIsUserMenuOpen(false)
            }

            if(cartDropdown &&
                cartButton &&
                !cartDropdown.contains(event.target as Node) &&
                !cartButton.contains(event.target as Node)
            ){
                setIsCartOpen(false);
            }

            const wishlistDropdown = 
            document.getElementById("wishlistDropdown");
            const wishlistButton =
            document.getElementById("wishlistButton");
            if(wishlistDropdown &&
                wishlistButton &&
                !wishlistDropdown.contains(event.target as Node) &&
                !wishlistButton.contains(event.target as Node)
            ){
                setIsWishlistOpen(false);
            }
        }
        document.addEventListener("mousedown",
            handleClickOutside
        );
        return () => {
            document.removeEventListener("mousedown",
                handleClickOutside);
        }
    },[]);
  return (
    <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-10">
                <h1 className="text-2xl font-bold text-gray-900">OneStopShop</h1>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop"
                        className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                    >
                        Shop
                    </Link>
                </nav>
            </div>
            <div className="flex items-center space-x-6">
                <button
                    id="searchButton"
                    onClick={() => setIsSearchOpen(true)}
                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                    <FaSearch className="text-lg"/>
                </button>
                {isSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
                    <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl mx-4">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Search Products
                                </h2>
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FaCross className="text-xl"/>
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="searchInput"
                                    autoFocus
                                    placeholder="Search for products..."
                                    className="w-full px-4 py-3 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-base"
                                />
                                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                    <FaSearch className="mr-2"/>
                                    Search
                                </Button>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-3">
                                    Popular Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                    "Sweaters",
                                    "Dresses",
                                    "Jackets",
                                    "Accessories",
                                    "New Arrivals",
                                    "Sale Items",
                                    ].map((category) => (
                                    <Badge
                                        key={category}
                                        variant="secondary"
                                        className="cursor-pointer hover:bg-gray-100"
                                    >
                                        {category}
                                    </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-3">
                                    Trending Searches
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                    "Winter Collection",
                                    "Party Dresses",
                                    "Casual Wear",
                                    "Designer Bags",
                                    "Sports Shoes",
                                    "Formal Wear",
                                    ].map((term) => (
                                    <button
                                        key={term}
                                        className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        <FaSearch className="text-xs mr-2"/>
                                        {term}
                                    </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className="relative">
                    <button
                        id="userMenuButton"
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                        <FaUser className="text-lg"/>
                    </button>
                    {isUserMenuOpen && (
                        <div
                            id="userDropdownMenu"
                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                        >
                        {!isLoggedIn ? (
                            <>
                            <Link
                                href="/sign-in"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                setIsUserMenuOpen(false);
                                // Add sign in logic here
                                }}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/sign-up"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                onClick={() => {
                                setIsUserMenuOpen(false);
                                // Add register logic here
                                }}
                            >
                                Register
                            </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/dashboard/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                    setIsUserMenuOpen(false);
                                    // Add my account logic here
                                    }}
                                >
                                    My Account
                                </Link>
                                <Link
                                    href="/order"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                    setIsUserMenuOpen(false);
                                    // Add order history logic here
                                    }}
                                >
                                    Order History
                                </Link>
                                <Link
                                    href="/wishlist"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                    setIsUserMenuOpen(false);
                                    // Add saved items logic here
                                    }}
                                >
                                    Saved Items
                                </Link>
                                <div className="border-t border-gray-100 my-1"></div>
                                <Link
                                    href="/sign-out"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => {
                                    setIsUserMenuOpen(false);
                                    // Add sign out logic here
                                    }}
                                >
                                    Sign Out
                                </Link>
                            </>
                        )}
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button
                        id="wishlistButton"
                        onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                        className="text-gray-600 hover:text-gray-900 relative cursor-pointer"
                    >
                        <FaHeart className="text-lg"/>
                        <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-600 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-[4px] leading-none font-semibold">
                            1
                        </span>
                    </button>
                    {isWishlistOpen && (
                        <div
                            id="wishlistDropdown"
                            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                        >
                            <div className="p-4">
                                {wishlistItems.length > 0 ? (
                                    <div className="space-y-4">
                                        {wishlistItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-3"
                                        >
                                            <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                                                    {item.name}
                                                </h4>
                                                <div className="flex items-center mt-1">
                                                    <span className="text-sm font-medium text-gray-900">
                                                    ${item.price.toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    <FaTimes className="fas fa-times"/>
                                                </button>
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="text-blue-600 hover:text-blue-700"
                                                >
                                                    <FaShoppingBag className="fas fa-shopping-cart"/>
                                                </button>
                                            </div>
                                        </div>
                                        ))}
                                        <div className="border-t border-gray-200 mt-4 pt-4">
                                            <Link
                                                href="https://readdy.ai/home/1057942f-ffeb-4e3d-a5bd-49c5383971bf/e636eb7b-7163-4781-8218-8efc45f6e63a"
                                                data-readdy="true"
                                            >
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                                    View Wishlist
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                <div className="text-center py-8">
                                    <FaHeart className="text-gray-400 text-4xl mb-3"/>
                                    <p className="text-gray-600 mb-4">
                                        Your wishlist is empty
                                    </p>
                                    <Button className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                        Continue Shopping
                                    </Button>
                                </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button
                        id="cartButton"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="text-gray-600 hover:text-gray-900 relative cursor-pointer"
                    >
                        <FaShoppingBag className="text-lg"/>
                        <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-600 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-[4px] leading-none font-semibold">
                            2
                        </span>
                    </button>
                    {isCartOpen && (
                        <div
                            id="cartDropdown"
                            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 z-50"
                        >
                            <div className="p-4">
                                <div className="space-y-4">
                                    {[
                                        {
                                        id: 1,
                                        name: "Silver High Neck Sweater",
                                        price: 59.99,
                                        quantity: 1,
                                        image:
                                            "https://readdy.ai/api/search-image?query=elegant%20silver%20high%20neck%20sweater%20front%20view%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=80&height=80&seq=9&orientation=squarish",
                                        },
                                        {
                                        id: 2,
                                        name: "Wool Blend Cardigan",
                                        price: 64.99,
                                        quantity: 1,
                                        image:
                                            "https://readdy.ai/api/search-image?query=stylish%20wool%20blend%20cardigan%20in%20light%20gray%20color%2C%20high%20quality%20fashion%20photography%2C%20simple%20clean%20white%20background%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20detailed%20fabric%20texture&width=80&height=80&seq=10&orientation=squarish",
                                        },
                                    ].map((item) => (
                                        <div key={item.id} className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 line-clamp-1">
                                                {item.name}
                                                </h4>
                                                <div className="flex items-center mt-1">
                                                <span className="text-sm text-gray-500">
                                                    {item.quantity} ×{" "}
                                                </span>
                                                <span className="text-sm font-medium text-gray-900 ml-1">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <FaTimes className="fas fa-times"/>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 mt-4 pt-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-600">Subtotal:</span>
                                        <span className="text-base font-medium text-gray-900">
                                            $124.98
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant="outline"
                                            className="w-full !rounded-button whitespace-nowrap"
                                        >
                                            <Link href="/cart">View Cart</Link>
                                        </Button>
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                            <Link href="/checkout">Checkout</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;