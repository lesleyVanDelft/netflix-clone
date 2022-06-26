import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Homepage from './pages/Homepage/Homepage';
import Movies from './pages/Movies/Movies';
import Test from './pages/Test';
import TvShows from './pages/TvShows/TvShows';
import Login from './pages/UserData/Login';
import Register from './pages/UserData/Register';

const AppRoutes = ({}) => {
	const userStatus = useSelector(state => state.user.status);
	const location = useLocation();
	// const cookie = Cookies.get('jwt');
	// const navigate = useNavigate();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (cookie === undefined || user === null) {
	// 		dispatch(logoutUser());
	// 		// localStorage.removeItem('root:user');
	// 		navigate('/login');
	// 	}
	// }, []);
	// console.log(cookie);

	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/movies" element={<Movies />} />
			<Route path="/television" element={<TvShows />} />
			<Route path="/bookmarks" element={<Bookmarks />} />
			<Route exact path="/" element={<Homepage />} />
			<Route path="/test" element={<Test />} />
		</Routes>
	);
};

export default AppRoutes;
