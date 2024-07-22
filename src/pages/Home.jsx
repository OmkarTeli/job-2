import React from "react"
import { Button } from "@/components/ui/button"

function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      Have a good coding x {count}
      <Button onClick={() => setCount((prev) => prev + 1)}>Click me</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  )
}

export default Home
