import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../components/MediaItem/MediaItem';
import SearchBar from '../../components/SearchBar/SearchBar';
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
			<main className="Bookmarks">
				<SearchBar getValue={getValue} placeholder={'bookmarked content'} />
				{searchValue === '' ? (
					<>
						<BookmarkedSection category={'Movies'} mediaList={mediaList} />
						<BookmarkedSection category={'Series'} mediaList={mediaList} />
					</>
				) : (
					<Search searchList={searchList} value={searchValue} />
				)}
			</main>
		</>
	);
};

export default Bookmarks;
