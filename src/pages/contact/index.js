import React, {useState} from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Index = () => {
  const [validated, setValidated] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...validated,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch(error => alert(error))
  }

  const handleChange = e => {
    setValidated({ [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor={'name'}>
            Your name
          </label>
          <input
            className="input"
            type={'text'}
            name={'name'}
            onChange={handleChange}
            id={'name'}
            required={true}
          />
        </div>
        <div>
          <label htmlFor={'email'}>
            Email
          </label>
          <input
            type={'email'}
            name={'email'}
            onChange={handleChange}
            id={'email'}
            required={true}
          />
        </div>
        <button>Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default Index
