import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import MediaItem from '../../../components/MediaItem/MediaItem';

const Recommended = ({ mediaList }) => {
	const bookmarks = useSelector(
		state => state.user.user && state.user.user.bookmarkedMedia
	);
	const [bookmarkList, setBookmarkList] = useState(bookmarks);
	const [bookmarkedItem, setBookmarkedItem] = useState();
	useEffect(() => {
		setBookmarkList(bookmarks ? bookmarks : []);
	}, [bookmarks]);
	// useEffect(() => {
	// 	bookmarkList.
	// }, [])
	// console.log(bookmarkList);
	return (
		<section className="Homepage__recommended">
			<h2 className="sectionHeader">Recommended for you</h2>
			<ul className="content recommended">
				{mediaList.length > 0 &&
					mediaList.map((media, i) => {
						return (
							(
								<MediaItem
									content={media}
									// bookmarkList={bookmarkList.includes(media._id)}
									key={i}
								/>
							) || <Skeleton />
						);
					})}
			</ul>
		</section>
	);
};

export default Recommended;
