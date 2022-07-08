import { useDispatch } from 'react-redux';
import BlankProfilePic from '../../assets/blank-profile-picture.png';
import { selectProfile } from '../../features/userSlice/userSlice';
import { useMediaQuery } from 'react-responsive';
import { FaPlusCircle } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const UserProfiles = ({ user, profiles, setAddActive }) => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1024px)',
	});
	const dispatch = useDispatch();
	return (
		<>
			{isDesktop && user !== null && profiles && (
				<>
					{profiles.map((prof, i) => {
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
					<div className="user add" onClick={() => setAddActive(true)}>
						<div className="icon">
							<FaPlusCircle />
						</div>
						<span className="user__profileName">Add profile</span>
					</div>
				</>
			)}

			{/* useSwiper button next slide */}
			{!isDesktop && user !== null && profiles && (
				<Swiper
					spaceBetween={16}
					modules={[Pagination, Scrollbar, A11y]}
					slidesPerView={2}
					preloadImages={true}
					scrollbar={{ draggable: true }}
					loop={false}>
					{profiles.map((prof, i) => {
						return (
							<SwiperSlide key={i}>
								<div
									className="user"
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
							</SwiperSlide>
						);
					})}
					<SwiperSlide>
						<div className="user add" onClick={() => setAddActive(true)}>
							<div className="icon">
								<FaPlusCircle />
							</div>
							<span className="user__profileName">Add profile</span>
						</div>
					</SwiperSlide>
				</Swiper>
			)}
		</>
	);
};

export default UserProfiles;
