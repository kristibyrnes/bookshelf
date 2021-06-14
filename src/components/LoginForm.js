import * as React from 'react'

function LoginForm({username, password}) {
  return (
    <form type="submit">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username}></input>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password}></input>
      </div>
    </form>
  )
}

export default LoginForm
