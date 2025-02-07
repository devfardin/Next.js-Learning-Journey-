"use client"
const errorPage = ({error, reset}) => {
  // show error in console
  console.log(error.message);
  
  return (
    <div> 
      <h1 className='text-center text-red-500 my-5 text-xl'> 
    Something went wrong</h1>
    
    <button onClick={() => reset()} className="text-black text-lg font-medium py-2 px-3 rounded border-none">Try Again </button> 
    </div>
  )
}

export default errorPage
