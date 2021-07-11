import { HashRouter as Router, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home/Home'
import Setting from './pages/Setting/Setting'

const App = () => {
    return (
        <Router>
            <MainLayout>
                <Route exact path="/home" component={Home} />
                <Route exact path="/setting" component={Setting} />
            </MainLayout>
        </Router>
        
    )
}

export default App;