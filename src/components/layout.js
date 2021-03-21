import React from "react"
import Footer from "../components/footer/footer"
const Layout = ({ children, init }) => {
  return (
    <div className={`layout ${init ? "loading" : ""}`}>
      {children}
      <Footer init={init} />
    </div>
  )
}

export default Layout
