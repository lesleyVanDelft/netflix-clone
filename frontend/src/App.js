// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Login from './pages/UserData/Login';
// import Register from './pages/UserData/Register';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';
import './dist/style.css';
import { useEffect, useState } from 'react';
function App() {
	const userStatus = useSelector(state => state.user.status);
	// const userBookmarks = useSelector(state => state.user.bookmarks);
	// console.log(userBookmarks);
	// const userBookmarks = useSelector(state =>
	// 	state.user.user ? state.user.user.bookmarkedMedia : null
	// );
	// const [bookmarks, setBookmarks] = useState([]);
	// useEffect(() => {
	// 	setBookmarks(userBookmarks);
	// }, [userBookmarks]);

	// console.log(bookmarks);
	return (
		<div className="App">
			{userStatus === 'loggedIn' && <Navbar />}
			<AppRoutes b />
		</div>
	);
}

export default App;
