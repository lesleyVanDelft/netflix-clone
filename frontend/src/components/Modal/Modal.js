import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { BsCheck2 } from 'react-icons/bs';
import { addProfile } from '../../features/userSlice/userSlice';

const Modal = ({ setAddActive }) => {
	const [checked, setChecked] = useState(false);
	const [nameValue, setNameValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = e => {
		setNameValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			addProfile({
				username: nameValue,
				profileImage: {
					exists: false,
					imageId: 'null',
				},
			})
		);
	};

	return (
		<div className="Modal">
			<Logo className="Modal__logo" />
			<div className="Modal__content">
				<div className="Modal__text">
					<h1>Add profile</h1>
					<h2>Add a new profile for another "TotallyNotNetflix" user.</h2>
				</div>

				<div className="Modal__add">
					<div className="Modal__add--avatar">
						<img src={BlankProfilePic} alt="user avatar" />
					</div>

					<div className="Modal__add--inputs">
						<input
							type="text"
							placeholder={'Name'}
							onChange={handleChange}
							value={nameValue}
						/>
						<div className="child-checkbox">
							<input type="checkbox" id="child-profile" />
							<label
								htmlFor="child-profile"
								onClick={() => setChecked(!checked)}>
								{checked && <BsCheck2 />}
							</label>
							<span className="add-child-marker">Child?</span>
							<span
								className="child-profile-tooltip"
								role="checkbox"
								aria-checked="false"
								tabIndex={0}>
								When selected, only movies and shows meant for 12 years and
								older are shown in this profile.
							</span>
						</div>
					</div>
				</div>

				<div className="Modal__buttons">
					<button className="continue" onClick={handleSubmit}>
						Continue
					</button>
					<button
						className="cancel"
						onClick={prevState => setAddActive(!prevState)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
