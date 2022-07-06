import { useDispatch, useSelector } from 'react-redux';
import { selectProfile } from '../../features/userSlice/userSlice';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { FaPlusCircle } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';

const ManageProfiles = () => {
	// const [addActive, setAddActive] = useState(false);
	const user = useSelector(state => state.user.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<main className="ManageProfiles">
			{/* {addActive && <Modal setAddActive={setAddActive} />} */}
			<h1>Manage Profiles:</h1>
			<div className="ManageProfiles__users">
				{user.profiles &&
					user.profiles.map((prof, i) => {
						return (
							<div
								className="user"
								key={i}
								onClick={() => dispatch(selectProfile(prof))}>
								{/* <div className="overlay">
									<TiPencil />
								</div> */}

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
