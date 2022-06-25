import MediaItem from '../../../components/MediaItem/MediaItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle';
// import 'swiper/modules/scrollbar/scrollbar';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const Trending = ({ mediaList, trending }) => {
	return (
		<section className="Homepage__trending">
			<h2 className="sectionHeader">Trending</h2>
			{trending.length > 0 && (
				<div className="content trending ">
					<Swiper
						spaceBetween={10}
						modules={[Pagination, Scrollbar, A11y]}
						// slidesPerView={1.55}
						slidesPerView={1.55}
						slidesPerGroup={1}
						preloadImages={true}
						// pagination={{ clickable: true, type: 'bullets' }}
						scrollbar={{ draggable: true }}
						loop={false}>
						{trending.map((media, i) => {
							return (
								<SwiperSlide key={i}>
									<MediaItem content={media} trending={true} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			)}
		</section>
	);
};

export default Trending;
