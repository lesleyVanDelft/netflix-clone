import { useDispatch, useSelector } from 'react-redux';
import { selectProfile } from '../../features/userSlice/userSlice';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { FaPlusCircle } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ManageModal from './ManageModal';

const ManageProfiles = () => {
	const [editActive, setEditActive] = useState(false);
	const [profileData, setProfileData] = useState();
	const user = useSelector(state => state.user.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<main className="ManageProfiles">
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
