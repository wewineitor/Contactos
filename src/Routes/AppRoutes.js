import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../Components/screens/home/HomeScreen'
import UpdateScreen from '../Components/screens/update/UpdateScreen'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<HomeScreen/>}/>
                <Route path='/actualizar/:id' element = {<UpdateScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes