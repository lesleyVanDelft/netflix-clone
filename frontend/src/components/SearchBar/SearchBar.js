import { useEffect, useState, createContext } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import { AiFillCloseCircle } from 'react-icons/ai';

const SearchBar = ({ getValue, placeholder }) => {
	const [value, setValue] = useState('');

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
					placeholder={`Search for ${placeholder}`}
					autoComplete="off"
					value={value}
					onChange={handleChange}
				/>
				{value !== '' && <AiFillCloseCircle onClick={() => setValue('')} />}
			</div>
		</div>
	);
};

export default SearchBar;
