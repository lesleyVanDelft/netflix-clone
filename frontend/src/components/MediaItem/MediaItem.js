import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkIconEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from '../../assets/icon-bookmark-full.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	addBookmark,
	deleteBookmark,
} from '../../features/userSlice/userSlice';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const MediaItem = ({ content, trending }) => {
	const user = useSelector(state => state.user);
	const [currentMedia, setCurrentMedia] = useState(content);
	const isBookmarked =
		user && user.user && user.user.bookmarkedMedia.includes(currentMedia._id);
	const [bookmark, setBookmark] = useState(isBookmarked);

	const dispatch = useDispatch();
	useEffect(() => {
		setCurrentMedia(content);
	}, [content]);

	useEffect(() => {
		setBookmark(isBookmarked);
	}, [isBookmarked]);

	// const handleBookmark = () => {
	// 	// if (isBookmarked.length > 0) {
	// 	// dispatch(deleteBookmark(content));
	// 	// } else {

	// 	// user.user.bookmarkedMedia[0] !== currentMedia._id
	// 	// 	? dispatch(addBookmark(content))
	// 	// 	: dispatch(deleteBookmark(content));
	// 	dispatch(addBookmark(content));
	// 	// }
	// };

	return (
		<li className={`MediaItem ${trending ? 'trending' : 'recommended'} `}>
			<button
				type="button"
				onClick={() => {
					if (bookmark) {
						dispatch(deleteBookmark(content));
						setBookmark(false);
					} else if (!bookmark) {
						dispatch(addBookmark(content));
						setBookmark(true);
					}
				}}
				className={`MediaItem__bookmark ${bookmark ? 'bookmarked' : ''}`}>
				<BookmarkIconEmpty />
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
								<li>{content.year || <Skeleton />}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category || <Skeleton />}
								</li>
								<span className="circle"></span>
								<li>{content.rating || <Skeleton />}</li>
							</ul>

							<h3>{content.title}</h3>
						</div>
					)}

					{trending || (
						<div className="MediaItem__details recommended">
							<ul className="details recommended">
								<li>{content.year || <Skeleton />}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category || <Skeleton />}
								</li>
								<span className="circle"></span>
								<li>{content.rating || <Skeleton />}</li>
							</ul>

							<h3>{content.title || <Skeleton />}</h3>
						</div>
					)}
				</figcaption>
			</figure>
		</li>
	);
};

export default MediaItem;
