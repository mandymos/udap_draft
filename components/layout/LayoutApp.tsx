import { Layout } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getLoggedInUser } from '../../redux/userSlice'
import LayoutHeader from './LayoutHeader'
import LayoutSidebar from './LayoutSidebar'
import LoginPage from './LoginPage'
const { Content, Footer } = Layout

function LayoutApp({ children }: { children: React.ReactNode }) {
  const user = useSelector(getLoggedInUser)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutHeader />
      {!user && <LoginPage />}
      {user && (
        <Layout style={{ alignItems: 'stretch' }}>
          <LayoutSidebar />
          <Layout>
            <Content>{children}</Content>
            {/* <Footer className="text-center">Placeholder for footer</Footer> */}
          </Layout>
        </Layout>
      )}
    </Layout>
  )
}

export default LayoutApp
