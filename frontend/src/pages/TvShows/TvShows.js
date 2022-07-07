import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { pageVariant } from '../../framerVariants';
import MediaItem from '../../components/MediaItem/MediaItem';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Search from '../Homepage/Search/Search';

const TvShows = () => {
	const mediaList = useSelector(state => state.media.media);
	const [searchValue, setSearchValue] = useState('');
	const [tvList, setTvList] = useState([]);
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		setSearchList(
			tvList.filter(m =>
				m.title.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	}, [searchValue, tvList]);

	const getValue = value => {
		setSearchValue(value);
	};

	useEffect(() => {
		setTvList(mediaList.filter(m => m.category !== 'Movie'));
	}, [mediaList]);

	return (
		<>
			<Navbar />
			<motion.main
				className="Series"
				variants={pageVariant}
				initial="initial"
				animate="animate"
				exit="exit">
				<SearchBar getValue={getValue} placeholder={'TV series'} />
				<h2 className="sectionHeader">TV Series</h2>

				{searchValue === '' ? (
					<ul className="content">
						{tvList.map((m, i) => {
							return <MediaItem content={m} key={i} />;
						})}
					</ul>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</motion.main>
		</>
	);
};

export default TvShows;
