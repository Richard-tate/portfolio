import React from "react"
import { FaTimes } from "react-icons/fa"

const Modal = ({ setShow, data }) => {
  const [active, setActive] = React.useState(0)
  const { title, des, email } = data[active]
  return (
    <React.Fragment>
      <section className="modal">
        <button className="close" onClick={() => setShow("Home")}>
          <FaTimes />
        </button>
        <article className="modal-content">
          {data[active].btn
            ? data.map((obj, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`modal_btn ${index === active ? "active" : ""}`}
                  >
                    {obj.btn}
                  </button>
                )
              })
            : null}
          <div style={{ margin: "2rem 0" }}>
            <h3>{title}</h3>
            <p>{des}</p>
            {email ? <form>{email}</form> : null}
          </div>
        </article>
      </section>
      <div className="overlay"></div>
    </React.Fragment>
  )
}

export default Modal
