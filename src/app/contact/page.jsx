import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
export default function page() {
  return (
    <div>
      <Nav />
      <div className='flex justify-center my-80'>
      <h1 className='text-3xl font-bold'>My Contact</h1></div>
      <Footer />
    </div>
  )
}
