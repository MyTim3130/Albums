import React from 'react'

const Album = (props: any) => {
  return (
    <main>
        <div className='h-screen w-screen flex justify-center items-center'>
        <img src={props.image} alt="missing album" className='h-[50vh]' />

        </div>
    </main>
  )
}

export default Album