import React from 'react'
import style from './Main.module.css'
import UserButtonsSvg from './UserButtonsSvg/UserButtonsSvg'
import UserNameDesc from './UserNameDesc/UserNameDesc'
import UserPic from './UserPic/UserPic'
import UserName from './UserName/UserName'

const Main = () => {
  return (
    <>
      <div className={style.UserPicBlock}>
        <UserPic
        />
      </div>
      <div className={style.UserNameBlock}>
        <UserName
          txt='noxuro'
        />
      </div>
      <div className={style.UserDescBlock}>
        <UserNameDesc
          txt='junior python | react JS dev'
        />
      </div>
      <div className={style.UserSvgBlock}>
        <UserButtonsSvg></UserButtonsSvg>
      </div>
      <div className={style.FadeLine}></div>
    </>
  )
}

export default Main