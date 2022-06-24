import logo from '../../assets/logo.svg';
import navHome from '../../assets/icon-nav-home.svg';
import navMovies from '../../assets/icon-category-movie.svg';
import navTelevision from '../../assets/icon-category-tv.svg';
import navBookmarkFull from '../../assets/icon-bookmark-full.svg';
import navBlankProfile from '../../assets/blank-profile-picture.png';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<figure className="Navbar__logo">
				<img src={logo} alt="Site logo" className="logo" />
			</figure>

			<div className="Navbar__icons">
				<img src={navHome} alt="Homepage icon" className="navIcon home" />
				<img src={navMovies} alt="Movies icon" className="navIcon movies" />
				<img
					src={navTelevision}
					alt="Television series icon"
					className="navIcon tv"
				/>
				<img
					src={navBookmarkFull}
					alt="Bookmarked shows or movies icon"
					className="navIcon bookmark"
				/>
			</div>

			<div className="Navbar__user">
				<img src={navBlankProfile} alt="User avatar" className="userAvatar" />
			</div>
		</nav>
	);
};

export default Navbar;
