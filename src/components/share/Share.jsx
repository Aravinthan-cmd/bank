import React from 'react'
import '../share/share.scss'

const Share = ({context}) => {
  return (
    <div className='info_profile'>
        <div className="circle">{context}</div>
        <div className="name">
            <p>Unkown</p>
        </div>
    </div>
  )
}

export default Share