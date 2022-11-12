import React from 'react'
import map from '../../assets/images/fm2.jpeg'
const MapImage = () => {
  return (
    <div className='flex h-[100px] w-full justify-center  mt-4 items-center'>
        <img src={map} alt="map" className='w-full h-full obbject-cover'/>
    </div>
  )
}

export default MapImage