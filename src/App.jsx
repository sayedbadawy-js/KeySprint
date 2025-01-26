 
// import './App.css'
// import TypingPractice from './components/TypingPractice'
import TypingSprintLanding from './components/TypingSprintLanding'
import {
  Route, 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TypingSprintLanding />} />,
  )
)
function App() {
  

  return  <RouterProvider router={router}/>
}

export default App
