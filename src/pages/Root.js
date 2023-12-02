import React from 'react'
import styles from "./Root.module.css"
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Root = () => {
  return (
    <div>
      <MainNavigation/>
      <main className={styles.content}>
      <Outlet/>
      </main>
    </div>
  )
}

export default Root
