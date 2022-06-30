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

	return (
		<main className="Bookmarks">
			<SearchBar getValue={getValue} placeholder={'bookmarked content'} />
			<BookmarkedSection category={'Movies'} />
			<BookmarkedSection category={'Series'} />
		</main>
	);
};

export default Bookmarks;
