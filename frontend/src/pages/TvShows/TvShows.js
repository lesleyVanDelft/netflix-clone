import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../components/MediaItem/MediaItem';
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
		<main className="Movies">
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
		</main>
	);
};

export default TvShows;
