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

function App() {
	// const media = useSelector(state => state.media.media);
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route exact path="/" element={<Homepage />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
