import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 shadow'>
        <div className='font-extrabold text-2xl'>QShop</div>

        <section className='flex gap-8 font-semibold'>
            <div className='p-3'><a href="">Home</a></div>
            <div className='p-3'><a href="">Products</a></div>
            <div className='p-3'>Cart</div>
            <div className='p-3'>
                <span className='px-3 py-1 rounded-2xl bg-black text-white'>
                    Logout
                </span>
            </div>
        </section>
    </nav>
  )
}

export default Navbar