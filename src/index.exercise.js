import * as React from 'react'
import ReactDOM from 'react-dom'
import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {Logo} from 'components/logo'

function LoginForm({buttonText, onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
      </div>

      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App({buttonText}) {
  const [openModal, setOpenModal] = React.useState('none')
  
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog isOpen={openModal === 'login'} aria-label="login">
        <div>
          <button className="close-button" onClick={() => setOpenModal('none')}>
            Close
          </button>

          <LoginForm onSubmit={login} buttonText="Login" />
        </div>
      </Dialog>

      <Dialog isOpen={openModal === 'register'} aria-label="register">
        <div>
          <button className="close-button" onClick={() => setOpenModal('none')}>
            Close
          </button>

          <LoginForm onSubmit={register} buttonText="Register" />
        </div>
      </Dialog>
    </div>
  )
}

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
