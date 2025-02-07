import React from 'react'
import PostCard from './PostCard';

const postPage = async () => {
    const res = await fetch('http://localhost:3000/posts.json', {
        cache: 'force-cache',
        // cache: 'no-store'
        // next: {
        //     revalidate: 30,
        // },
    }); 
    const post = await res.json();
    console.log(post);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    post.map((post) => <PostCard key={post.id} post={post}/>)
                }
            </div>
        </div>
    )
}

export default postPage
