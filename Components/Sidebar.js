import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon, RssIcon  } from '@heroicons/react/24/outline'
// import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/16/outline'
// import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/24/outline'



function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-200'>
        <div className='flex items-center space-x-2 mb-5 hover:text-white cursor-pointer'>
            <HomeIcon className="w-6 h-6" />
            <p>Home</p>
        </div>
        <div className='flex items-center space-x-2 mb-5 hover:text-white cursor-pointer'>
            <MagnifyingGlassIcon className="w-6 h-6" />
            <p>Search</p>
        </div>
        <div className='flex items-center space-x-2 mb-5 hover:text-white cursor-pointer'>
            <BuildingLibraryIcon className="w-6 h-6" />
            <p>Your Library</p>
        </div>

        <hr/>

        <div className='flex items-center space-x-2 mb-5 pt-5 hover:text-white cursor-pointer'>
            <PlusCircleIcon className="w-6 h-6" />
            <p>Create Playlist</p>
        </div>
        <div className='flex items-center space-x-2 mb-5 hover:text-white cursor-pointer'>
            <HeartIcon className="w-6 h-6" />
            <p>Liked Songs</p>
        </div>
        <div className='flex items-center space-x-2 mb-5 hover:text-white cursor-pointer'>
            <RssIcon className="w-6 h-6" />
            <p>Your Episodes</p>
        </div>
      
    </div>
  )
}

export default Sidebar
