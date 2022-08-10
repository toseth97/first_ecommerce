import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear
  return (
    <footer>
        <p> &copy; {date} He-Codes, All right reserved</p>
        <p>
            Made with <span className='love'>&hearts;</span> from Nigeria by Tobiloba Lawal
        </p>
    </footer>
  )
}

export default Footer