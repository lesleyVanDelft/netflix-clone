import { useSelector } from 'react-redux';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { FaPlusCircle } from 'react-icons/fa';

const Profile = () => {
	const user = useSelector(state => state.user.user);
	return (
		<main className="Profile">
			<h1>Who's watching?</h1>
			<div className="Profile__users">
				{user.profiles.map(prof => {
					return (
						<div className="user" key={prof._id}>
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
				<div className="user add">
					<div className="icon">
						<FaPlusCircle />
					</div>
					<span className="user__profileName">Add profile</span>
				</div>
			</div>

			<button className="btn btn--profilePage">Manage profiles</button>
		</main>
	);
};

export default Profile;
