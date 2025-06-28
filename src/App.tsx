import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom' 
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element ={<Home />}/>
          
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
