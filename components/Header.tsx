import React from 'react'

const Header = () => {
  return (
    <header className='py-2 px-5 border-b border-black'>
        <nav>
            <div>
                {/* calculator logo will apper here */}
                <h2 className='font-semibold text-2xl max-md:text-xl'>NumConvertPro</h2>
            </div>
        </nav>
    </header>
  )
}

export default Header