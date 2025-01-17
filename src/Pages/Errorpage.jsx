import React from 'react'
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
    {/* <!--
  This example requires updating your template:

  ```
  <html className="h-full">
  <body className="h-full">
  ```
--> */}
<main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-gray-200">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">Page not found</h1>
    <p className="mt-6 text-base leading-7 text-gray-200">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link to={"/"} className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
      <a href="#" className="text-sm font-semibold text-gray-300">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
    </>
  )
}

export default Errorpage