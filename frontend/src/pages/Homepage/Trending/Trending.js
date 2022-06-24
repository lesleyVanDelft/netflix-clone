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
			{trending.length > 0 && (
				<ul className="content trending swiper">
					<Swiper
						// spaceBetween={}
						slidesPerView={1.55}
						// slidesPerGroup={2}
						preloadImages={true}
						modules={Scrollbar}
						loop={false}>
						{trending.map((media, i) => {
							return (
								<SwiperSlide key={i}>
									<MediaItem content={media} trending={true} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</ul>
			)}
		</section>
	);
};

export default Trending;
