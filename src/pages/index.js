import React from "react"
import Main from "../components/main/main"

import Layout from "../components/layout"

export default function Home() {
  const [init, setInit] = React.useState(true)
  const initValue = "Home" || "home"
  const [show, setShow] = React.useState(initValue)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setInit(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Layout init={init}>
      <Main
        init={init}
        initValue={initValue}
        show={show}
        setShow={setShow}
      ></Main>
    </Layout>
  )
}
