import { useDispatch, useSelector } from 'react-redux';
// import {reset} from '../../features/userSlice/userSlice';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { FaPlusCircle } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ManageModal from './ManageModal';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const ManageProfiles = () => {
	const [editActive, setEditActive] = useState(false);
	const [profileData, setProfileData] = useState();
	const user = useSelector(state => state.user.user);
	const updateStatus = useSelector(state => state.user.user.updateStatus);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isDesktop = useMediaQuery({
		query: '(min-width: 1024px)',
	});

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
				{isDesktop && user !== null && user.profiles && (
					<>
						{user.profiles.map((prof, i) => {
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
						<div className="user add" onClick={null}>
							<div className="icon">
								<FaPlusCircle />
							</div>
							<span className="user__profileName">Add profile</span>
						</div>
					</>
				)}

				{!isDesktop && user !== null && user.profiles && (
					<Swiper
						spaceBetween={16}
						modules={[Pagination, Scrollbar, A11y]}
						slidesPerView={2}
						preloadImages={true}
						scrollbar={{ draggable: true }}
						loop={false}>
						{user.profiles.map((prof, i) => {
							return (
								<SwiperSlide key={i}>
									<div
										className="user"
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
								</SwiperSlide>
							);
						})}
						<SwiperSlide>
							<div className="user add" onClick={null}>
								<div className="icon">
									<FaPlusCircle />
								</div>
								<span className="user__profileName">Add profile</span>
							</div>
						</SwiperSlide>
					</Swiper>
				)}
			</div>

			<button className="btn btn--profilePage" onClick={() => navigate('/')}>
				Done
				{/* <Link to="/">Done</Link> */}
			</button>
		</main>
	);
};

export default ManageProfiles;
