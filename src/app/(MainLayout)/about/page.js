import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-green-500'>Hello Iam about us page</h1>
      <Image src='https://media.licdn.com/dms/image/v2/D4E12AQEIIDCbb5draA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696065152678?e=2147483647&v=beta&t=rs8wHzzcy-PY8TK-1tXFBBBPkogj5HFodSVZnZppye0' alt='Next js image' 
      width={1200} height={800}/>
    </div>
  )
}

export default AboutPage
