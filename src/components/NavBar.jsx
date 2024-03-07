import React from 'react'
import styles from './NavBar.module.css'
import {Link} from  "react-router-dom";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.item}><Link to = '/'>Home</Link></li>
        <li className={styles.item}><Link to = '/about'>About</Link></li>
        <li className={styles.item}><Link to = '/signin'>Sign In</Link></li>
        <li className={styles.item}><Link to = '/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
