import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const AboutCom = () => {
  return (
    <>
    <div className='container'>
    <h2 className='font-design text-center m-4' > Our Progress Bar in last 5 years</h2>
    <div className='mt-3'>
      <h3 className='mt-3'>2019</h3>
    <ProgressBar striped variant="success" animated now={40} />
    <h3 className='mt-3'>2020</h3>
    <ProgressBar striped variant="info" animated now={20} />
    <h3 className='mt-3'>2021</h3>
    <ProgressBar striped variant="warning" animated now={60} />
    <h3 className='mt-3'>2022</h3>
    <ProgressBar striped variant="danger" animated now={80} />
    <h3 className='mt-3'>2023</h3>
    <ProgressBar striped variant="primary" animated now={90} />

  </div>
  </div>
  </>
  )
}

export default AboutCom;