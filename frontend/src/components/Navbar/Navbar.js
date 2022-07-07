import logo from '../../assets/logo.svg';
import { ReactComponent as NavHome } from '../../assets/icon-nav-home.svg';
import { ReactComponent as NavMovies } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as NavTelevision } from '../../assets/icon-nav-tv-series.svg';
import { ReactComponent as NavBookmarkFull } from '../../assets/icon-nav-bookmark.svg';
import navBlankProfile from '../../assets/blank-profile-picture.png';
import { BiUser } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem';
import { logout } from '../../features/userSlice/userSlice';
import { logoutLocalStorage } from '../../features/utils/saveLocalStorage';
import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const [active, setActive] = useState(false);
	const dropdownRef = useRef(null);
	useOutsideClick(dropdownRef, () => {
		active && setActive(false);
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<nav className="Navbar">
			<figure className="Navbar__logo" onClick={() => navigate('/')}>
				<img src={logo} alt="Site logo" className="logo" />
			</figure>

			<div className="Navbar__icons">
				<NavLink to={'/'}>
					<NavHome className="navIcon home" />
				</NavLink>
				<NavLink to={'/movies'}>
					<NavMovies className="navIcon movies" />
				</NavLink>
				<NavLink to={'/television'}>
					<NavTelevision className="navIcon tv" />
				</NavLink>
				<NavLink to={'/bookmarks'}>
					<NavBookmarkFull className="navIcon bookmark" />
				</NavLink>
			</div>

			<div
				className="Navbar__user"
				onClick={() => setActive(!active)}
				ref={dropdownRef}>
				<img src={navBlankProfile} alt="User avatar" className="userAvatar" />
				<AnimatePresence>
					{active && (
						<Dropdown navbar={true}>
							<DropdownItem>
								<div className="flex-row-container">
									<img
										src={navBlankProfile}
										className="userAvatar profile"
										alt="user profile icon"
									/>
									<button className="btn btn--dropdown">
										<span className="bold">&#43;</span> Add Profile
									</button>
								</div>
							</DropdownItem>
							<DropdownItem>
								<button
									className="btn btn--dropdown"
									onClick={() => {
										setTimeout(() => {
											navigate('/login');
											dispatch(logout());
										}, 100);
									}}>
									Logout
								</button>
							</DropdownItem>
						</Dropdown>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
