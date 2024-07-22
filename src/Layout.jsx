import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen w-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
