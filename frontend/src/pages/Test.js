import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMedia } from '../redux/reducers/mediaReducer';
import './Test.css';
// import { getAll } from '../features/mediaSlice/mediaSlice';

const Test = () => {
	const media = useSelector(state => state.media);
	const [list, setList] = useState(media);
	const dispatch = useDispatch();
	// const loadData = async () => {
	// 	const response = await axios.get('http://localhost:5000/test');
	// 	setList(response.data);
	// 	// console.log(response.data);
	// 	return response.data;
	// };
	// console.log(list);
	useEffect(() => {
		setList(media);
	}, [media]);
	useEffect(() => {
		dispatch(getAllMedia());
	}, []);

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
