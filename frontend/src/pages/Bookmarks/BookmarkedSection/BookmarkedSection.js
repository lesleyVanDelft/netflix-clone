import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../../components/MediaItem/MediaItem';

const BookmarkedSection = ({ category }) => {
	const userBookmarks = useSelector(state => state.user.user.bookmarkedMedia);
	const [bookmarkList, setBookmarkList] = useState(userBookmarks);

	useEffect(() => {
		setBookmarkList(userBookmarks);
	}, [userBookmarks]);

	const movies = bookmarkList.filter(m => m.category === 'Movie');
	const series = bookmarkList.filter(m => m.category !== 'Movie');

	return (
		<section className={`Bookmarked ${category}`}>
			<h2 className="sectionHeader">Bookmarked {category && category}</h2>
			{/* <ul className="content"> */}
			{category === 'Movies' && (
				<ul className="content">
					{movies.map((m, i) => {
						return <MediaItem content={m} key={i} />;
					})}
				</ul>
			)}

			{category === 'Series' && (
				<ul className="content">
					{series.map((m, i) => {
						return <MediaItem content={m} key={i} />;
					})}
				</ul>
			)}
			{/* // </ul> */}
		</section>
	);
};

export default BookmarkedSection;
