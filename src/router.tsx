import Home from './pages/Home/Home'
import Setting from "./pages/Setting/Setting";

import {
    Home as HomeIcon,
    SportsEsports,
    PeopleAlt,
    NewReleases,
    PieChart,
    Settings
} from '@material-ui/icons'

const routes = [
    {
        path: `/home`,
        element: <Home />,
        btn: HomeIcon
    },
    {
        path: `/gamecenter`,
        element: <Home />,
        btn: SportsEsports
    },
    {
        path: `/friends`,
        element: <Home />,
        btn: PeopleAlt
    },
    {
        path: `/info`,
        element: <Home />,
        btn: NewReleases
    },
    {
        path: `/tablechart`,
        element: <Home />,
        btn: PieChart
    },
    {
        path: `/setting`,
        element: <Setting />,
        btn: Settings
    }
]

export default routes;