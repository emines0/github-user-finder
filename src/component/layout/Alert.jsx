import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { FaBan } from 'react-icons/fa'

const Alert = () => {
   const { alert } = useContext(AlertContext)

   return (
      <div className='grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4' style={{ visibility: alert ? 'visible' : 'hidden' }}>
         <div className='alert alert-error'>
            <div>
               {/* <FaBan /> */}
               <strong>{alert?.msg}</strong>
            </div>
         </div>
      </div>
   )
}

export default Alert
