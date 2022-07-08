import { modalVariant } from '../../framerVariants';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProfile } from '../../features/userSlice/userSlice';

const ConfirmModal = ({ image, setModalState, profileData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = () => {
		dispatch(deleteProfile(profileData._id));
		setTimeout(() => {
			setModalState(false);
			navigate('/');
		}, 150);
	};

	return (
		<motion.div
			className="ConfirmModal"
			variants={modalVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<h1>Are you sure?</h1>
			<h2>Deleting profile named: '{profileData && profileData.username}'</h2>
			<div className="ConfirmModal__content">
				<figure className="ConfirmModal__content--image">
					<img src={image} alt="user avatar" />
				</figure>

				<div className="ConfirmModal__content--text">
					<p>
						This will delete your profile, including any bookmarks you have
						saved. This action is permanent!
					</p>
				</div>
			</div>
			<div className="ConfirmModal__buttons">
				<button
					className="btn btn--squared"
					onClick={() => setModalState(false)}>
					Cancel
				</button>
				<button className="btn btn--squared delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</motion.div>
	);
};

export default ConfirmModal;
