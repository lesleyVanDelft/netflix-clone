import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { pageVariant } from '../../framerVariants';
import Search from '../Homepage/Search/Search';
import BookmarkedSection from './BookmarkedSection/BookmarkedSection';

const Bookmarks = () => {
	const media = useSelector(state => state.media.media);
	const [mediaList, setMediaList] = useState(media);
	const [searchList, setSearchList] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		setMediaList(media);
	}, [media]);

	useEffect(() => {
		setSearchList(
			mediaList.filter(m =>
				m.title.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	}, [mediaList, searchValue]);

	const getValue = value => {
		setSearchValue(value);
	};

	return (
		<>
			<Navbar />
			<motion.main
				className="Bookmarks"
				variants={pageVariant}
				initial="initial"
				animate="animate"
				exit="exit">
				<SearchBar getValue={getValue} placeholder={'bookmarked content'} />
				{searchValue === '' ? (
					<>
						<BookmarkedSection category={'Movies'} mediaList={mediaList} />
						<BookmarkedSection category={'Series'} mediaList={mediaList} />
					</>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</motion.main>
		</>
	);
};

export default Bookmarks;
