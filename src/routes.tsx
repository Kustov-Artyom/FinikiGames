import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import UIShowcase from './pages/UIShowcase'
import Cards from './pages/Cards'
import Forms from './pages/Forms'
import Game from './pages/Game'
import RouteError from './pages/RouteError'
import Lore from './pages/Lore'
import Rewards from './pages/Rewards'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <RouteError />,
        children: [
            { index: true, element: <Home /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'ui', element: <UIShowcase /> },
            { path: 'cards', element: <Cards /> },
            { path: 'forms', element: <Forms /> },
            { path: 'game', element: <Game /> },
            {path: 'lore', element: <Lore/>},
            {path:'rewards', element:<Rewards/>}
        ]
    }
])

export default router
