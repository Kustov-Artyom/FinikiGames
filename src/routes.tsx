import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Gallery from './pages/mediaImages'
import UIShowcase from './pages/UIShowcase'
import Cards from './pages/Cards'
import Forms from './pages/Forms'
import Game from './pages/Game'
import RouteError from './pages/RouteError'
import Contacts from './pages/Contacts'

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
            { path: 'contacts', element: <Contacts /> }
        ]
    }
])

export default router
