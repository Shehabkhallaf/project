import React from 'react'
import logo from '../../assets/images/logo.jpg'

export default function Home() {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className='home-content'>
      <h2><span>Molecular</span> Doking For</h2>
        <h2>Durg Degisn</h2>
      </div>
      <div className='home-logo'>
      <img src={logo} alt="" />
      </div>
    </div>
  )
}