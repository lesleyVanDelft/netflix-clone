import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Login from './pages/UserData/Login';
import Register from './pages/UserData/Register';
import './dist/style.css';
import Test from './pages/Test';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</div>
	);
}

export default App;
