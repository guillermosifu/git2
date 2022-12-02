import{BrowserRouter,Routes,Route} from 'react-router-dom'
import{SearchView} from "../pages"
import Users from "../pages/Users"
import User from "../pages/User"


const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<SearchView/>}/>
            <Route path='/users/:username' element={<Users/>}/>
            <Route path='/user/:username' element={<User/>}/>
        </Routes>
        </BrowserRouter>

    )
}


export default Router;