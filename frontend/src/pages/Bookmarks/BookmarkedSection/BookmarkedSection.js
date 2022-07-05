import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../../components/MediaItem/MediaItem';

const BookmarkedSection = ({ category, mediaList }) => {
	const userBookmarks = useSelector(state => state.user.user.bookmarkedMedia);
	const [bookmarkList, setBookmarkList] = useState(
		mediaList.filter(bm => userBookmarks.includes(bm._id))
	);
	useEffect(() => {
		setBookmarkList(mediaList.filter(bm => userBookmarks.includes(bm._id)));
	}, [mediaList, userBookmarks]);

	// console.log(bookmarkList);

	// useEffect(() => {
	// 	setBookmarkList(userBookmarks);
	// }, [userBookmarks]);

	const bookmarkedMovies =
		bookmarkList.length > 0
			? bookmarkList.filter(m => m.category === 'Movie')
			: [];
	const bookmarkedSeries =
		bookmarkList.length > 0
			? bookmarkList.filter(m => m.category !== 'Movie')
			: [];

	return (
		<section className={`Bookmarked${category}`}>
			<h2 className="sectionHeader">Bookmarked {category && category}</h2>
			{/* <ul className="content"> */}
			{category === 'Movies' && bookmarkedMovies.length > 0 && (
				<ul className="content">
					{bookmarkedMovies.map((m, i) => {
						return <MediaItem content={m} key={i} trending={false} />;
					})}
				</ul>
			)}

			{category === 'Series' && bookmarkedSeries.length > 0 && (
				<ul className="content">
					{bookmarkedSeries.map((m, i) => {
						return <MediaItem content={m} key={i} trending={false} />;
					})}
				</ul>
			)}
			{/* // </ul> */}
		</section>
	);
};

export default BookmarkedSection;
