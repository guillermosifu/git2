import{BrowserRouter,Routes,Route} from 'react-router-dom'
import{SearchView} from "../pages"
import Users from "../pages/Users"


const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<SearchView/>}/>
            <Route path='/users/:username' element={<Users/>}/>
        </Routes>
        </BrowserRouter>

    )
}


export default Router;