import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MediaItem from '../../../components/MediaItem/MediaItem';

const BookmarkedSection = ({ category }) => {
	const userBookmarks = useSelector(state => state.user.user.bookmarkedMedia);
	// const []
	const [bookmarkList, setBookmarkList] = useState(userBookmarks);

	useEffect(() => {
		setBookmarkList(userBookmarks);
	}, [userBookmarks]);

	return (
		<section className={`Bookmarked ${category}`}>
			<h2 className="sectionHeader">Bookmarked {category && category}</h2>
			<ul className="content">
				{category === 'movies' &&
					bookmarkList
						.filter(m => m.category === 'Movie')
						.map((m, i) => {
							return <MediaItem content={m} key={i} />;
						})}
			</ul>
		</section>
	);
};

export default BookmarkedSection;
