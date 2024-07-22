import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
