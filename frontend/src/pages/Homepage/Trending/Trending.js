import MediaItem from '../../../components/MediaItem/MediaItem';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle';
// import 'swiper/modules/scrollbar/scrollbar';
import 'swiper/css';
import 'swiper/css/scrollbar';

const Trending = ({ mediaList, trending }) => {
	return (
		<section className="Homepage__trending">
			<h2 className="sectionHeader">Trending</h2>
			<ul className="content trending swiper">
				{/* <Swiper spaceBetween={1}> */}
				{trending.length > 0 && (
					<Swiper
						spaceBetween={16}
						slidesPerView={1.5}
						modules={Scrollbar}
						loop={false}>
						{trending.map((media, i) => {
							console.log('test');
							return (
								<SwiperSlide key={i}>
									<MediaItem content={media} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				)}
				{/* </Swiper> */}
			</ul>
		</section>
	);
};

export default Trending;
