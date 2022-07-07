import { useDispatch, useSelector } from 'react-redux';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FaPlusCircle } from 'react-icons/fa';
import { selectProfile } from '../../features/userSlice/userSlice';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { pageVariant } from '../../framerVariants';

const Profile = () => {
	const [addActive, setAddActive] = useState(false);
	const user = useSelector(state => state.user.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
					{user.profiles &&
						user.profiles.map((prof, i) => {
							return (
								<div
									className="user"
									key={i}
									onClick={() => dispatch(selectProfile(prof))}>
									<img
										src={
											prof.profileImage.exists
												? prof.profileImage.imageId
												: BlankProfilePic
										}
										alt="user profile avatar"
									/>
									<span className="user__profileName">{prof.username}</span>
								</div>
							);
						})}

					{/* <div className="Profile__users--create"> */}
					<div className="user add" onClick={() => setAddActive(true)}>
						<div className="icon">
							<FaPlusCircle />
						</div>
						<span className="user__profileName">Add profile</span>
					</div>
				</div>

				<button
					className="btn btn--profilePage"
					onClick={() => navigate('/manageProfiles')}>
					Manage profiles
				</button>
			</motion.main>
		</>
	);
};

export default Profile;
