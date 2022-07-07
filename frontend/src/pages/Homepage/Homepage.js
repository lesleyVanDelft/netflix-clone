import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAll } from '../../features/mediaSlice/mediaSlice';
import Profile from '../Profile/Profile';
import Recommended from './Recommended/Recommended';
import Search from './Search/Search';
import Trending from './Trending/Trending';
import { pageVariant } from '../../framerVariants';
import { AnimatePresence, motion } from 'framer-motion';

const Homepage = () => {
	const loadStatus = useSelector(state => state.media.status);
	const userStorage = JSON.parse(localStorage.getItem('user'));
	const userStatus = useSelector(state => state.user.status);
	const media = useSelector(state => state.media.media);
	const [mediaList, setMediaList] = useState(media);
	const [searchList, setSearchList] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getValue = value => {
		setSearchValue(value);
	};

	useEffect(() => {
		if (userStorage === null) {
			navigate('/login');
		}
	}, [navigate, userStatus, userStorage]);

	// useEffect(() => {
	// 	if (loadStatus === 'success') {
	// 		return <Profile />;
	// 	}
	// }, [loadStatus]);

	useEffect(() => {
		if (loadStatus === 'idle' && userStatus === 'loggedIn') {
			dispatch(getAll());
		}

		setMediaList(media);
	}, [loadStatus, userStatus]);

	useEffect(() => {
		setSearchList(
			mediaList.filter(m =>
				m.title.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	}, [mediaList, searchValue]);

	const trending = mediaList.filter(m => m.isTrending === true);
	const recommended = mediaList.filter(m => m.isTrending !== true);

	return (
		<>
			<AnimatePresence>
				{userStatus === 'success' && <Profile />}
			</AnimatePresence>
			<AnimatePresence>
				{userStatus === 'loggedIn' && (
					<>
						<Navbar />
						<motion.main
							className="Homepage"
							variants={pageVariant}
							initial="initial"
							animate="animate"
							exit="exit">
							<SearchBar
								getValue={getValue}
								placeholder="movies or TV series"
							/>
							{searchValue === '' ? (
								<>
									<Trending trendingList={trending} />
									<Recommended mediaList={recommended} />
								</>
							) : (
								<Search searchList={searchList} value={searchValue} />
							)}
						</motion.main>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Homepage;
