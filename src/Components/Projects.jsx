import React, { Suspense } from 'react'
// import { DATA } from '../projectsData'
// import Pagination from './Pagination'
const PaginatedProject = React.lazy(()=> import('./Pagination'));
const Projects = ({darkMode}) => {
    
  return (

  <div className='h-[calc(100vh_-_4rem)] overflow-y-auto'>
    <Suspense fallback={<div>Loading...</div>}>
      <PaginatedProject darkMode={darkMode}/>
    </Suspense>
  </div>
  )
}

export default Projects