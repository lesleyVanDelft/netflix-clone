import logo from '../../assets/logo.svg';
// import navHome from '../../assets/icon-nav-home.svg';
import { ReactComponent as NavHome } from '../../assets/icon-nav-home.svg';
// import navMovies from '../../assets/icon-category-movie.svg';
import { ReactComponent as NavMovies } from '../../assets/icon-nav-movies.svg';
// import navTelevision from '../../assets/icon-category-tv.svg';
import { ReactComponent as NavTelevision } from '../../assets/icon-nav-tv-series.svg';
// import navBookmarkFull from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as NavBookmarkFull } from '../../assets/icon-nav-bookmark.svg';
import navBlankProfile from '../../assets/blank-profile-picture.png';
// import { ReactComponent as NavBlankProfile } from '../../assets/blank-profile-picture.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="Navbar">
			<figure className="Navbar__logo" onClick={() => navigate('/')}>
				<img src={logo} alt="Site logo" className="logo" />
			</figure>

			<div className="Navbar__icons">
				<NavLink to={'/'}>
					{/* <img src={navHome} alt="Homepage icon" className="navIcon home" /> */}
					<NavHome className="navIcon home" />
				</NavLink>
				<NavLink to={'/movies'}>
					{/* <img src={navMovies} alt="Movies icon" className="navIcon movies" /> */}
					<NavMovies className="navIcon movies" />
				</NavLink>
				<NavLink to={'/television'}>
					{/* <img
						src={navTelevision}
						alt="Television series icon"
						className="navIcon tv"
					/> */}
					<NavTelevision className="navIcon tv" />
				</NavLink>
				<NavLink to={'/bookmarks'}>
					{/* <img
						src={navBookmarkFull}
						alt="Bookmarked shows or movies icon"
						className="navIcon bookmark"
					/> */}
					<NavBookmarkFull className="navIcon bookmark" />
				</NavLink>
			</div>

			<div className="Navbar__user">
				<img src={navBlankProfile} alt="User avatar" className="userAvatar" />
				{/* <NavBlankProfile className="userAvatar" /> */}
			</div>
		</nav>
	);
};

export default Navbar;
