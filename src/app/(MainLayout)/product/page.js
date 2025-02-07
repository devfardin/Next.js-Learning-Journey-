"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from "react";
import { FaShoppingCart, FaHeart, FaRegHeart, FaClipboard } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuickView = () => {
    const [wishlist, setWishlist] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            feature_image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            product_title: "Nike Air Max Running Shoes",
            product_price: 129.99,
            discount_price: 99.99,
            product_category: "Athletic Footwear",
            SKU: "NK-AM-001",
            short_description: "Premium running shoes with advanced cushioning technology for maximum comfort and performance.",
            stock: 10
        },
        {
            id: 2,
            feature_image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            product_title: "Smart Watch Pro",
            product_price: 299.99,
            product_category: "Electronics",
            SKU: "SW-PRO-002",
            short_description: "Advanced smartwatch with health monitoring and fitness tracking features.",
            stock: 0
        },
        {
            id: 3,
            feature_image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            product_title: "Premium Wireless Headphones",
            product_price: 199.99,
            discount_price: 159.99,
            product_category: "Audio",
            SKU: "HD-WL-003",
            short_description: "High-quality wireless headphones with noise cancellation technology.",
            stock: 5
        },
        {
            id: 4,
            feature_image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6",
            product_title: "Leather Laptop Bag",
            product_price: 79.99,
            product_category: "Accessories",
            SKU: "BG-LT-004",
            short_description: "Stylish and durable leather laptop bag with multiple compartments.",
            stock: 15
        }
    ];
    const toggleWishlist = (productId) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("SKU copied to clipboard!");
    };

    const QuickViewModal = ({ product, onClose }) => {
        if (!product) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold">{product.product_title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={product.feature_image}
                            alt={product.product_title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div>
                            <p className="text-gray-600 mb-4">{product.short_description}</p>
                            <p className="text-xl font-bold mb-2">
                                ${product.discount_price || product.product_price}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">SKU: {product.SKU}</p>
                            <div className="space-y-2">
                                <button
                                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                    disabled={product.stock === 0}
                                >
                                    Add to Cart
                                </button>
                                <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="relative">
                            {/* <img
                                src={product.feature_image}
                                alt={product.product_title}
                                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                                onClick={() => setSelectedProduct(product)}
                                loading="lazy"
                            /> */}
                            <Image onClick={() => setSelectedProduct(product)} objectFit='cover' sizes="100vw" src={product.feature_image} alt={product.product_title} width={500} height={500} style={{
                                width: '100%',
                                height: 'auto',
                            }} />
                            <button
                                onClick={() => toggleWishlist(product.id)}
                                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm"
                                aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                            >
                                {wishlist.includes(product.id) ? (
                                    <FaHeart className="text-red-500 text-xl" />
                                ) : (
                                    <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
                                )}
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {product.product_category}
                                </span>
                                <div
                                    className="text-sm text-gray-400 cursor-pointer flex items-center gap-1"
                                    onClick={() => copyToClipboard(product.SKU)}
                                >
                                    {product.SKU}
                                    <FaClipboard className="text-gray-400" />
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:line-clamp-none">
                                {product.product_title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 hover:line-clamp-none">
                                {product.short_description}
                            </p>

                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    {product.discount_price ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold text-blue-600">
                                                ${product.discount_price}
                                            </span>
                                            <span className="text-sm text-gray-400 line-through">
                                                ${product.product_price}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-xl font-bold text-blue-600">
                                            ${product.product_price}
                                        </span>
                                    )}
                                </div>
                                <span className={`text-sm ${product.stock === 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {product.stock === 0 ? 'Out of Stock' : `${product.stock} in stock`}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <button
                                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors duration-300"
                                    disabled={product.stock === 0}
                                >
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>
                                <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <QuickViewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default QuickView