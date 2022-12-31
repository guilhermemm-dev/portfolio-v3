import Head from "next/head"
import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Martins | Frontend Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/public/assets/favicon.svg" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
