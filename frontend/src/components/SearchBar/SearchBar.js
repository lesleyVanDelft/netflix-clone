import { useEffect, useState, createContext } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import { AiFillCloseCircle } from 'react-icons/ai';

const SearchBar = ({ getValue }) => {
	const [value, setValue] = useState('');
	const [active, setActive] = useState(false);

	// console.log(value.length);

	useEffect(() => {
		getValue(value);
	}, [getValue, value]);

	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<div className="SearchBar">
			<img src={searchIcon} alt="Search icon" className="searchIcon" />
			<div className={`SearchBar__input ${value.length > 0 ? 'active' : ''}`}>
				<input
					type="text"
					name="search"
					id="search"
					className={`searchInput `}
					placeholder="Search for movies or TV series"
					autoComplete="off"
					value={value}
					onChange={handleChange}
					// onFocus={() => {
					// 	setActive(true);
					// }}
					// onBlur={() => {
					// 	setActive(false);
					// }}
				/>
				{value !== '' && <AiFillCloseCircle onClick={() => setValue('')} />}
			</div>
		</div>
	);
};

export default SearchBar;
