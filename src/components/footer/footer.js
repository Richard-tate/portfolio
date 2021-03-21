import React from "react"

const Footer = ({ init }) => {
  return (
    <footer className={init ? "loading" : ""}>
      <p>@ Hello from footer</p>
    </footer>
  )
}

export default Footer
