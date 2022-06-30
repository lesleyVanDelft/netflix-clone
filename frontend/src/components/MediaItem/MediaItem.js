import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkIconEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from '../../assets/icon-bookmark-full.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	addBookmark,
	deleteBookmark,
} from '../../features/userSlice/userSlice';
// import { addBookmark } from '../../features/bookmarkSlice/bookmarkSlice';
import { useEffect, useState } from 'react';

// import logo from '../../'

const MediaItem = ({ content, trending }) => {
	const user = useSelector(state => state.user);
	const [currentMedia, setCurrentMedia] = useState(content);
	const isBookmarked =
		user && user.user.bookmarkedMedia.includes(currentMedia._id);
	const [bookmark, setBookmark] = useState(isBookmarked);

	// const bookmarks = useSelector(state => state.user.bookmarkedMedia);
	// const [bookmarkedMedia, setBookmarkedMedia] = useState([
	// 	...user.user.bookmarkedMedia,
	// ]);

	const dispatch = useDispatch();
	useEffect(() => {
		setCurrentMedia(content);
	}, [content]);

	// useEffect(() => {
	// 	setBookmark(isBookmarked);
	// }, [isBookmarked]);

	// useEffect(() => {
	// 	setBookmarkedMedia(
	// 		user.user.bookmarkedMedia.filter(bookmark => bookmark._id === content._id)
	// 	);
	// }, [
	// 	content._id,
	// 	user.bookmarkedMedia,
	// 	user.bookmarks,
	// 	user.user.bookmarkedMedia,
	// ]);
	// console.log(bookmarkedMedia);

	const handleBookmark = () => {
		// if (isBookmarked.length > 0) {
		// dispatch(deleteBookmark(content));
		// } else {

		// user.user.bookmarkedMedia[0] !== currentMedia._id
		// 	? dispatch(addBookmark(content))
		// 	: dispatch(deleteBookmark(content));
		dispatch(addBookmark(content));
		// }
	};

	return (
		<li
			className={`MediaItem ${trending ? 'trending' : 'recommended'} `}
			onClick={() => {
				// console.log(user.user.bookmarkedMedia[0]);
				// console.log(currentMedia._id);
				// console.log(bookmark);
				// null
				console.log(bookmark);
			}}>
			<button
				type="button"
				onClick={() => {
					if (bookmark) {
						dispatch(deleteBookmark(content));
					} else if (!bookmark) {
						dispatch(addBookmark(content));
					}
					setBookmark(!bookmark);
				}}
				className={`MediaItem__bookmark ${bookmark ? 'bookmarked' : ''}`}>
				<BookmarkIconEmpty />
				{/* {bookmark ? <BookmarkIconFull /> : <BookmarkIconEmpty />} */}
				{/* {bookmark || <BookmarkIconEmpty />} */}
			</button>

			<figure>
				<img
					src={
						content && trending
							? content.thumbnail.trending.small
							: content.thumbnail.regular.small
					}
					alt=""
				/>
				<figcaption>
					{trending && (
						<div className="MediaItem__details trending">
							<ul className="details">
								<li>{content.year}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category}
								</li>
								<span className="circle"></span>
								<li>{content.rating}</li>
							</ul>

							<h3>{content.title}</h3>
						</div>
					)}

					{trending || (
						<div className="MediaItem__details recommended">
							<ul className="details recommended">
								<li>{content.year}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category}
								</li>
								<span className="circle"></span>
								<li>{content.rating}</li>
							</ul>

							<h3>{content.title}</h3>
						</div>
					)}
				</figcaption>
			</figure>
		</li>
	);
};

export default MediaItem;
