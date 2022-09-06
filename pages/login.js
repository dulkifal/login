import Image from "next/image"
import styles from '../styles/login.module.css'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.login_form}>
        <Image src="/assets/logo.png" width={200} height={100} />
 
        <form  action="">
          <h1>Login</h1>
          
          <input type="text" name="name" id="name" placeholder="User Name"/>
            <input type="text" name="password" id="password" placeholder="Password"/>
          <button className={styles.login_btn}>Login</button>
            </form>
        <p className={styles.forgot}>Forgot <span>Password</span>?</p>
          </div>

      </div>
    

      )
}