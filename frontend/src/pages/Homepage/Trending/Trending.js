import MediaItem from '../../../components/MediaItem/MediaItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle';
// import 'swiper/modules/scrollbar/scrollbar';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import { useMediaQuery } from 'react-responsive';

const Trending = ({ trendingList }) => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1024px)',
	});
	return (
		<section className="Homepage__trending">
			<h2 className="sectionHeader">Trending</h2>
			{trendingList.length > 0 && (
				<div className="content trending ">
					<Swiper
						spaceBetween={isDesktop ? 40 : 10}
						modules={[Pagination, Scrollbar, A11y]}
						slidesPerView={isDesktop ? 3 : 1.55}
						slidesPerGroup={1}
						preloadImages={true}
						scrollbar={{ draggable: true }}
						loop={false}>
						{trendingList.map((media, i) => {
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
