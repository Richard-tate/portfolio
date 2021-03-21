import React from "react"

const Hero = ({ init, setShow }) => {
  const data = [{ title: "About" }, { title: "Projects" }, { title: "Contact" }]
  return (
    <section className={`hero-container ${init ? "loading" : ""}`}>
      <article className={`hero ${init ? "loading" : ""}`}>
        <div className={`hero-info ${init ? "loading" : ""}`}>
          <h3>Hi, I' m Rich</h3>
          <p>
            A front-end web developer, UI enthusiast and aspiring full-stack
            developer.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            dignissimos nemo ipsam nisi provident vero ut nesciunt?
          </p>
        </div>
      </article>
      <nav className={`nav-btns ${init ? "loading" : ""}`}>
        {data.map((obj, index) => {
          return (
            <button
              key={index}
              className={`btn ${obj.title}`}
              onClick={({ target }) => setShow(target.innerText)}
            >
              {obj.title}
            </button>
          )
        })}
      </nav>
    </section>
  )
}

export default Hero
