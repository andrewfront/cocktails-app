import React from 'react'

const About = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="about">
          <div className="container">
            <div className="about__inner">
              <h4 className="about__title">About Us</h4>
                <p className="about__info">An open, crowd-sourced database of drinks and cocktails from around the world.
                We also offer a free JSON API for anyone wanting to use it.
                If you like the site, please consider supporting us on Patreon by clicking the link below…</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='cocktails__copyright'>
    made by | andrew
</footer>
    </div>
  )
}

export default About