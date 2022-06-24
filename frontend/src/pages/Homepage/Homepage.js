import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../features/mediaSlice/mediaSlice';
import Trending from './Trending/Trending';

const Homepage = () => {
	const loadStatus = useSelector(state => state.media.status);
	const media = useSelector(state => state.media.media);
	const [mediaList, setMediaList] = useState(media);
	const dispatch = useDispatch();

	useEffect(() => {
		if (loadStatus === 'idle') {
			dispatch(getAll());
		}

		setMediaList(media);
	}, [dispatch, loadStatus, media]);

	const trending = mediaList.filter(m => m.isTrending === true);

	return (
		<main className="Homepage">
			<Trending mediaList={mediaList} trending={trending} />
		</main>
	);
};

export default Homepage;
