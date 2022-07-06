import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../components/MediaItem/MediaItem';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Search from '../Homepage/Search/Search';

const Movies = () => {
	const mediaList = useSelector(state => state.media.media);
	const [searchValue, setSearchValue] = useState('');
	const [movieList, setMovieList] = useState([]);
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		setSearchList(
			movieList.filter(m =>
				m.title.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	}, [movieList, searchValue]);
	const getValue = value => {
		setSearchValue(value);
	};

	useEffect(() => {
		setMovieList(mediaList.filter(m => m.category === 'Movie'));
	}, [mediaList]);

	return (
		<>
			<Navbar />
			<main className="Movies">
				<SearchBar getValue={getValue} placeholder={'movies'} />
				<h2 className="sectionHeader">Movies</h2>

				{searchValue === '' ? (
					<ul className="content">
						{movieList.map((m, i) => {
							return <MediaItem content={m} key={i} />;
						})}
					</ul>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</main>
		</>
	);
};

export default Movies;
