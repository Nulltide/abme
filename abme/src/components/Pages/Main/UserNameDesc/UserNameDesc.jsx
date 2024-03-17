import React from 'react'
import style from './UserNameDesc.module.css'

const UserNameDesc = ({txt}) => {
  return (
    <div className={style.skin}>{txt}</div>
  )
}

export default UserNameDesc