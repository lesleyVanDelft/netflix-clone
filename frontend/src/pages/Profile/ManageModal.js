import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GoTriangleDown } from 'react-icons/go';
import { TiPencil } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../../features/userSlice/userSlice';

const ManageModal = ({ setEditActive, profileData }) => {
	const [username, setUsername] = useState(profileData.username);
	const [editData, setEditData] = useState(profileData);
	const dispatch = useDispatch();

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
		<div className="ManageModal">
			<Logo className="ManageModal__logo" />
			<h1>Edit profile</h1>
			<div className="ManageModal__user">
				<div className="user-avatar-wrapper">
					<img src={BlankProfilePic} alt="" />
					<TiPencil className="editSvg" />
				</div>

				<div className="ManageModal__user--inputs">
					<input
						type="text"
						value={username}
						placeholder={username}
						onChange={handleChange}
					/>

					<div className="language">
						<span>Language:</span>
						<button>
							English <GoTriangleDown />
						</button>
					</div>
				</div>
			</div>

			<div className="ManageModal__buttons">
				<button className="save" onClick={handleSubmit}>
					Save
				</button>
				<button
					className="cancel"
					onClick={prevState => setEditActive(!prevState)}>
					Cancel
				</button>
				<button className="delete">Delete profile</button>
			</div>
		</div>
	);
};

export default ManageModal;
