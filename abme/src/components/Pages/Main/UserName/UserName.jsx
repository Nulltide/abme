import React from 'react'
import style from './UserName.module.css'

const UserName = ({txt}) => {
  return (
    <div className={style.skin}>{txt}</div>
  )
}

export default UserName