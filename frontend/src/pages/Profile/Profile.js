import { useDispatch, useSelector } from 'react-redux';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FaPlusCircle } from 'react-icons/fa';
import {
	resetUpdateStatus,
	selectProfile,
} from '../../features/userSlice/userSlice';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { pageVariant } from '../../framerVariants';
import UserProfiles from './UserProfiles';

const Profile = () => {
	const [addActive, setAddActive] = useState(false);
	const user = useSelector(state => state.user.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	// updateStatus !== null && handleReset();
	// 	// console.log(updateStatus);
	// 	dispatch(resetUpdateStatus(user.updateStatus));
	// }, []);
	return (
		<>
			<AnimatePresence>
				{addActive && <Modal setAddActive={setAddActive} active={addActive} />}
			</AnimatePresence>
			<motion.main
				className="Profile"
				variants={pageVariant}
				initial="initial"
				animate="animate"
				exit="exit">
				<Logo className="pageLogo" />
				<h1>Who's watching?</h1>
				<div className="Profile__users">
					<UserProfiles
						user={user}
						profiles={user !== null && user.profiles}
						setAddActive={setAddActive}
					/>
				</div>

				<button
					className="btn btn--squared"
					onClick={() => navigate('/manageProfiles')}>
					Manage profiles
				</button>
			</motion.main>
		</>
	);
};

export default Profile;
