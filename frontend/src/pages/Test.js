import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllMedia } from '../redux/reducers/mediaReducer';
import './Test.css';
import { getAll } from '../features/mediaSlice/mediaSlice';

const Test = () => {
	const loadStatus = useSelector(state => state.media.status);
	const media = useSelector(state => state.media);
	const [list, setList] = useState(media);
	const dispatch = useDispatch();

	useEffect(() => {
		setList(media);
	}, [media]);

	useEffect(() => {
		if (loadStatus === 'idle') {
			dispatch(getAll());
		}
	}, [dispatch, loadStatus]);

	return (
		<div className="Test">
			<ul>
				{list.length > 0 &&
					list.map((el, i) => {
						return <li key={i}>{el.title}</li>;
					})}
			</ul>
		</div>
	);
};

export default Test;
