import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RiRadioButtonFill } from "react-icons/ri"
// @ts-ignore
import webNetflixCloneImg from "../../../public/assets/projects/web-netflix.jpg"

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={webNetflixCloneImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>
            NextJs / ReactJs / JavaScript / Styled-Components / MaterialUi
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="pt-4 pb-4">
            Frontend focused Netflix clone project, using Next.Js, React,
            MateriaUI and styled-components.
          </p>
          
          <a
            href="https://github.com/guilhermemm-dev/accurate-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://accurate-frontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-[#005687] rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">🛠 Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;NextJs
              </p>
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;ReactJs
              </p>
              <p className="flex items-center py-2">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;JavaScript
              </p>
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;Styled-Components
              </p>
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;MaterialUi
              </p>
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;Axios
              </p>
              <p className="flex items-center py-2 ">
                <Image
                  className="pr-2"
                  alt="JavaScript"
                  height="20"
                  width="20"
                  src="/icon-javascript.svg"
                />
                &nbsp;Postman
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default netflix