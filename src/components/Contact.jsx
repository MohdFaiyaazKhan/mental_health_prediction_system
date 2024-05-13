import React from 'react'
import "../styles/Contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
    <main>
      <h1>Contact Us</h1>
      <form>
          <div>
              <input type='text' required placeholder='Name'/>
          </div>
          <div>
              <input type='email' required placeholder='E-mail'/>
          </div>
          <div>
              <input type='text' required placeholder='Tell us about your query...'/>
          </div>
          <button type='submit'>Send</button>
      </form>
    </main>
  </div>
  )
}

export default Contact
