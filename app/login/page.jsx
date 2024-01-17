import React from 'react'
import styles from '~/ui/login/login.module.scss'
import LoginForm from '~/ui/login/loginForm/loginForm'
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm></LoginForm>

    </div>
  )
}

export default LoginPage