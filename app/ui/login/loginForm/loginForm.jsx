"use client"

import React from 'react'
import styles from './loginForm.module.scss'
import { useFormState } from 'react-dom'
import { authenticate } from '~/lib/action'
const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder='username' name='username' className={styles.input} />
            <input type="password" placeholder='password' name='password' className={styles.input} />
            <button className={styles.button}>Login</button>
            {state && state}
        </form>
    )
}

export default LoginForm
