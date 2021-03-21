import React from "react"
import "../../styles/layout.css"
import Hero from "../hero/Hero"
import Modal from "../modal/Modal"
import { AboutData, ProjectData, ContactData, Missing } from "../../data/data"

const Main = ({ init, show, setShow, initValue }) => {
  return (
    <main className={init ? "loading" : "main"}>
      {show === initValue ? (
        <Hero init={init} setShow={setShow} />
      ) : (
        <Modal
          setShow={setShow}
          data={
            show === "About"
              ? AboutData
              : show === "Projects"
              ? ProjectData
              : show === "Contact"
              ? ContactData
              : Missing
          }
        />
      )}
    </main>
  )
}

export default Main
