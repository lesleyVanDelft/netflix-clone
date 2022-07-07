import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GoTriangleDown } from 'react-icons/go';
import { TiPencil } from 'react-icons/ti';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	editProfile,
	resetUpdateStatus,
} from '../../features/userSlice/userSlice';
import { modalVariant } from '../../framerVariants';
import { AnimatePresence, motion } from 'framer-motion';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownItem from '../../components/Dropdown/DropdownItem/DropdownItem';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { BsCheck2 } from 'react-icons/bs';
import { reset } from '../../features/userSlice/userSlice';

const ManageModal = ({ setEditActive, profileData }) => {
	const [username, setUsername] = useState(profileData.username);
	const [editData, setEditData] = useState(profileData);
	const [dropdownActive, setDropdownActive] = useState(false);
	const updateStatus = useSelector(state => state.user.user.updateStatus);
	const [updated, setUpdated] = useState(updateStatus);
	const dropdownRef = useRef(null);
	const dispatch = useDispatch();

	useOutsideClick(dropdownRef, () => {
		if (dropdownActive) {
			setDropdownActive(false);
		}
	});

	useEffect(() => {
		setUpdated(updateStatus);
	}, [updateStatus]);

	useEffect(() => {
		setEditData(profileData);
	}, [profileData]);

	const handleChange = e => {
		setUsername(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(
			editProfile({
				profileImage: editData.profileImage,
				username: username,
				bookmarks: editData.bookmarks,
				profileId: editData._id,
			})
		);
	};

	return (
		<motion.div
			className="ManageModal"
			variants={modalVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<Logo className="ManageModal__logo" />
			<h1>Edit profile</h1>
			<div className="ManageModal__user">
				<div className="user-avatar-wrapper">
					<img src={BlankProfilePic} alt="" />
					<TiPencil className="editSvg" />
				</div>

				<div className="ManageModal__user--inputs">
					<div className="input-container">
						<input
							type="text"
							value={username}
							placeholder={username}
							onChange={handleChange}
							className={`${updated === 'updateSuccess' ? 'success' : ''}`}
						/>
						{updated === 'updateSuccess' && <BsCheck2 />}
					</div>

					<div className="language" ref={dropdownRef}>
						<span>Language:</span>
						<button onClick={() => setDropdownActive(!dropdownActive)}>
							English <GoTriangleDown />
						</button>
						<AnimatePresence>
							{dropdownActive && (
								<Dropdown>
									<DropdownItem>English</DropdownItem>
								</Dropdown>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>

			<div className="ManageModal__buttons">
				<button className="save" onClick={handleSubmit}>
					Save
				</button>
				<button
					className="cancel"
					onClick={prevState => {
						setEditActive(!prevState);
						dispatch(resetUpdateStatus(updateStatus));
					}}>
					Cancel
				</button>
				<button className="delete">Delete profile</button>
			</div>
		</motion.div>
	);
};

export default ManageModal;
