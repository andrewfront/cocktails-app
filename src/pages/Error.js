import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="url">
          <div className="container">
            <div className="url__inner">
              <h4 className="url__title">ops, you entered wrong url</h4>
              <Link className='url__home-btn' to='/'>back home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error