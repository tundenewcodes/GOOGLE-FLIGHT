import React from 'react'

const HeaderNav = () => {
  return (
    <div className='w-full h-20 mx-4 flex shadow-md justify-center items-center'>
      <div className='flex w-full h-full mx-4 justify-between   items-center'>
        <p className='font-semibold cursor-pointer text-gray-700 text-xl active:border-b-4  active:border-blue-6 00'>
          Travel{' '}
        </p>{' '}
        <p className='font-semibold cursor-pointer text-gray-700 text-xl active:border-b-4  active:border-blue-600'>
          Explore{' '}
        </p>{' '}
        <p className='font-semibold  cursor-pointer text-gray-700 text-xl active:border-b-4  active:border-blue-600'>
          Things to do
        </p>{' '}
        <p className='font-semibold cursor-pointer text-gray-700 text-xl active:border-b-4  active:border-blue-600'>
          Flight{' '}
        </p>{' '}
        <p className='font-semibold cursor-pointer text-gray-700 text-xl active:border-b-4  active:border-blue-600'>
          Hotels{' '}
        </p>{' '}
      </div>{' '}
    </div>
  )
}

export default HeaderNav
