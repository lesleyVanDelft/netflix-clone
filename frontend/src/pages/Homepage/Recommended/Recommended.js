import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import MediaItem from '../../../components/MediaItem/MediaItem';
import SkeletonCard from '../../../components/Skeleton/SkeletonCard';

const Recommended = ({ mediaList }) => {
	const bookmarks = useSelector(
		state => state.user.user && state.user.user.bookmarkedMedia
	);
	const loadStatus = useSelector(state => state.media.status);
	const [loading, setLoading] = useState(loadStatus);
	const [bookmarkList, setBookmarkList] = useState(bookmarks);
	const [bookmarkedItem, setBookmarkedItem] = useState();

	useEffect(() => {
		setBookmarkList(bookmarks ? bookmarks : []);
	}, [bookmarks]);

	useEffect(() => {
		setLoading(loadStatus);
	}, [loadStatus]);
	return (
		<section className="Homepage__recommended">
			<h2 className="sectionHeader">Recommended for you</h2>
			<ul className="content recommended">
				{/* {loading === 'loading' && (
					<SkeletonCard height={240} width={140} list={mediaList} />
				)} */}
				{mediaList.length > 0 &&
					mediaList.map((media, i) => {
						return <MediaItem content={media} key={i} />;
					})}
			</ul>
		</section>
	);
};

export default Recommended;
