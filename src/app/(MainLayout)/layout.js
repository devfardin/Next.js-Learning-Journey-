import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
        <header>Header Templete here</header>
      {
        children
      }
      <footer>Footer Templete</footer>
    </div>
  )
}

export default MainLayout
