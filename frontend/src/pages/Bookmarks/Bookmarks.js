import { useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../components/MediaItem/MediaItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import Search from '../Homepage/Search/Search';
import BookmarkedSection from './BookmarkedSection/BookmarkedSection';

const Bookmarks = () => {
	const mediaList = useSelector(state => state.media.media);
	const [searchValue, setSearchValue] = useState('');
	const [tvList, setTvList] = useState([]);
	const [searchList, setSearchList] = useState([]);

	const getValue = value => {
		setSearchValue(value);
	};

	// useEffect(() => {
	// 	setSearchList(
	// 		movieList.filter(m =>
	// 			m.title.toLowerCase().includes(searchValue.toLowerCase())
	// 		)
	// 	);
	// }, [movieList, searchValue]);

	// useEffect(() => {
	// 	setMovieList(mediaList.filter(m => m.category === 'Movie'));
	// }, [mediaList]);

	return (
		<main className="Bookmarks">
			<SearchBar getValue={getValue} placeholder={'bookmarked content'} />
			<BookmarkedSection category={'Movies'} />
			<BookmarkedSection category={'Tv Shows'} />
			{/* <>
				<h2 className="sectionHeader">Bookmarked Movies</h2>
				{searchValue === '' ? (
					<ul className="content">
						{tvList.map((m, i) => {
							return <MediaItem content={m} key={i} />;
						})}
					</ul>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</>
			<>
				<h2 className="sectionHeader">Bookmarked TV series</h2>
				{searchValue === '' ? (
					<ul className="content">
						{tvList.map((m, i) => {
							return <MediaItem content={m} key={i} />;
						})}
					</ul>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</> */}
		</main>
	);
};

export default Bookmarks;
