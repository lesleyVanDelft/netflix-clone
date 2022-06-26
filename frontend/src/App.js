import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Login from './pages/UserData/Login';
import Register from './pages/UserData/Register';
import './dist/style.css';
import Test from './pages/Test';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
function App() {
	const userStatus = useSelector(state => state.user.status);
	return (
		<div className="App">
			{userStatus === 'loggedIn' && <Navbar />}
			<AppRoutes />
		</div>
	);
}

export default App;
