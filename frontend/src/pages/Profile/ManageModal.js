import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GoTriangleDown } from 'react-icons/go';
import { useState } from 'react';

const ManageModal = ({ setEditActive, profileData }) => {
	const [username, setUsername] = useState(profileData.username);

	const handleChange = e => {
		setUsername(e.target.value);
	};
	return (
		<div className="ManageModal">
			<Logo className="ManageModal__logo" />
			<h1>Edit profile</h1>
			<div className="ManageModal__user">
				<img src={BlankProfilePic} alt="" />

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
				<button className="">Save</button>
				<button className="" onClick={prevState => setEditActive(!prevState)}>
					Cancel
				</button>
				<button className="">Delete profile</button>
			</div>
		</div>
	);
};

export default ManageModal;
