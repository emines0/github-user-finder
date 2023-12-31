import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
   return (
      <div className='card shadow-md comact side bg-base-100'>
         <div className='fex-row items-center space-x-4 card-body'>
            <div>
               <div className='avatar'>
                  <div className='rounded-full shadow w-14 h-14'>
                     <img src={user.avatar_url} alt='profile' />
                  </div>
               </div>
            </div>
            <div>
               <h2 className='card-title'>{user.login}</h2>
               <Link className='text-base-content text-opacity-40' to={`/user/${user.login}`}>
                  Visit Profile
               </Link>
            </div>
         </div>
      </div>
   )
}

UserItem.propTypes = {
   user: PropTypes.object.isRequired
}

export default UserItem
