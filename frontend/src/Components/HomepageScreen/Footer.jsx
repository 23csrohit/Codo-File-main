import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_ROHIT' target='_ROHIT' href='https://portfolio-two-self-49.vercel.app/'>ROHIT YADAV</a></p>
        </div>
    </>
  )
}

export default Footer