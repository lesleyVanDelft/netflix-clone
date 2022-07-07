import { useDispatch, useSelector } from 'react-redux';
import {
	reset,
	resetUpdateStatus,
	selectProfile,
} from '../../features/userSlice/userSlice';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { FaPlusCircle } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ManageModal from './ManageModal';

const ManageProfiles = () => {
	const [editActive, setEditActive] = useState(false);
	const [profileData, setProfileData] = useState();
	const user = useSelector(state => state.user.user);
	const updateStatus = useSelector(state => state.user.user.updateStatus);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleReset = () => {
		return reset(null);
	};

	// useEffect(() => {
	// 	// updateStatus !== null && handleReset();
	// 	// console.log(updateStatus);
	// 	// updateStatus !== (null || 'updatePending') && dispatch(resetUpdateStatus(user.updateStatus));
	// 	dispatch(resetUpdateStatus(user.updateStatus));
	// }, [user.updateStatus]);
	return (
		<main className="ManageProfiles">
			<Logo className="pageLogo" />
			<AnimatePresence>
				{editActive && (
					<ManageModal
						setEditActive={setEditActive}
						profileData={profileData}
					/>
				)}
			</AnimatePresence>
			<h1>Manage Profiles:</h1>
			<div className="ManageProfiles__users">
				{user.profiles &&
					user.profiles.map((prof, i) => {
						return (
							<div
								className="user"
								key={i}
								onClick={() => {
									setEditActive(true);
									setProfileData(prof);
								}}>
								<div className="avatar-wrapper">
									<img
										src={
											prof.profileImage.exists
												? prof.profileImage.imageId
												: BlankProfilePic
										}
										alt="user profile avatar"
									/>
									<TiPencil className="editSvg" />
								</div>

								<span className="user__profileName">{prof.username}</span>
							</div>
						);
					})}

				{/* <div className="Profile__users--create"> */}
				<div className="user add" onClick={null}>
					<div className="icon">
						<FaPlusCircle />
					</div>
					<span className="user__profileName">Add profile</span>
				</div>
			</div>

			<button className="btn btn--profilePage" onClick={() => navigate('/')}>
				Done
				{/* <Link to="/">Done</Link> */}
			</button>
		</main>
	);
};

export default ManageProfiles;
