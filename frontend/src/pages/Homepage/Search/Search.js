import { useEffect, useState } from 'react';
import MediaItem from '../../../components/MediaItem/MediaItem';

const Search = ({ searchList, value }) => {
	const [list, setList] = useState(searchList);
	const [searchValue, setSearchValue] = useState(value);

	useEffect(() => {
		setList(searchList);
	}, [searchList]);

	useEffect(() => {
		setSearchValue(value);
	}, [value]);
	return (
		<section className="Search">
			<h2 className="sectionHeader">
				Found {searchList.length} results for '{value}'{' '}
			</h2>
			<ul className="content">
				{list.map((m, i) => {
					return <MediaItem content={m} key={i} />;
				})}
			</ul>
		</section>
	);
};

export default Search;
