import {Box, useColorModeValue} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
function App() {
  return (
    <Box minH = "100vh" bg={useColorModeValue("gray.300","gray.900")}>
      <Navbar />
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/create" element = {<CreatePage/>}/>
      </Routes>
    </Box>
    
  )
}

export default App;
//{ <Navbar />} whichever page is visited navbar would always show