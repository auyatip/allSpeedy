import React, { ReactElement } from 'react'
import LoginForm from './login-form'
import styles from '@/styles/Auth.module.scss'

export default function LoginComponent() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export async function getServerSideProps() { return { props: { header: "เข้าสู่ระบบ"}};}

// LoginComponent.getLayout = function getLayout(page: ReactElement) {
//   return <LayoutUserComponent children={page} headerText={"เข้าสู่ระบบ"}></LayoutUserComponent>;
// };