import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
import './dist/style.css';
import { useEffect, useState } from 'react';
function App() {
	const userStatus = useSelector(state => state.user.status);
	const user = useSelector(state => state.user.user);
	const [status, setStatus] = useState(userStatus);
	useEffect(() => {
		setStatus(userStatus);
	}, [userStatus]);
	return (
		<div className="App">
			{/* {userStatus !== ('loggedOut' || 'rejected') && <Navbar />} */}
			{/* {status !== ('loggedOut' || 'success') && <Navbar />} */}
			{/* {user.profile !== null ? <Navbar /> : null} */}
			<AppRoutes />
		</div>
	);
}

export default App;
