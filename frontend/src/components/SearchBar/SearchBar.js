import { useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';
const SearchBar = () => {
	const [value, setValue] = useState('');

	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<div className="SearchBar">
			<img src={searchIcon} alt="Search icon" className="searchIcon" />
			<input
				type="text"
				name="search"
				id="search"
				className="searchInput"
				placeholder="Search for movies or TV series"
				autoComplete="off"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBar;
