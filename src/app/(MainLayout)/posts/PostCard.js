import Image from 'next/image';
import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const PostCard = ({ post }) => {
    return (
        <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
            <div className="relative overflow-hidden">
                <Image objectFit='cover' sizes="100vw" src={post?.feature_image} 
                alt={post?.post_title} width={500} height={500} style={{
                    width: '100%',
                    height: 'auto',
                }} />
                <span className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                    {post.post_category}
                </span>
            </div>

            <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {post.post_title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.post_description || "No description available"}
                </p>
                <button
                    className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                >
                    Read More
                    <FiArrowRight className="ml-2" />
                </button>
            </div>
        </article>
    )
}

export default PostCard
