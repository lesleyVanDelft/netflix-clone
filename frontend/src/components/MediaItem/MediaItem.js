import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkIconEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from '../../assets/icon-bookmark-full.svg';
// import { addBookmark } from '../../features/userSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { addBookmark } from '../../features/bookmarkSlice/bookmarkSlice';
import {
	addBookmark,
	deleteBookmark,
} from '../../features/userSlice/userSlice';
// import { addBookmark } from '../../features/bookmarkSlice/bookmarkSlice';
import { useEffect, useState } from 'react';

// import logo from '../../'

const MediaItem = ({ content, trending }) => {
	// const user = useSelector(state => state.user.user);
	const bookmarks = useSelector(state => state.user.user.bookmarkedMedia);
	const [bookmarkedMedia, setBookmarkedMedia] = useState(bookmarks);
	const dispatch = useDispatch();
	useEffect(() => {
		bookmarks &&
			setBookmarkedMedia(
				bookmarks.filter(bookmark => bookmark._id === content._id)
			);
		console.log(bookmarkedMedia);
	}, [bookmarks, content._id]);

	const handleDispatch = () => {
		// bookmarkedMedia.map((bookmark, i) => {
		// 	// return console.log(bookmark._id);
		// 	// if(content._id === bookmark._id){
		// 	// 	return dispatch()
		// 	console.log(content._id === bookmark._id);
		// 	// }
		// 	return content._id === bookmark._id
		// 		? dispatch(deleteBookmark(content))
		// 		: dispatch(addBookmark(content));
		// });
		// console.log(bookmarks && bookmarks.filter(bm => bm._id === content._id));
		dispatch(addBookmark(content));
	};
	// console.log(
	// 	bookmarkList && bookmarkList.filter(bm => bm._id === content._id)
	// );

	return (
		<li
			className={`MediaItem ${trending ? 'trending' : 'recommended'} ${
				bookmarkedMedia.length > 0 ? 'bookmarked' : ''
			}`}>
			{/* {trending && ( */}
			<button type="button">
				<BookmarkIconEmpty onClick={handleDispatch} />
			</button>
			{/* // )} */}
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
