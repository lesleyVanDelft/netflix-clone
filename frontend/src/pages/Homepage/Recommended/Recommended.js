import MediaItem from '../../../components/MediaItem/MediaItem';

const Recommended = ({ mediaList }) => {
	return (
		<section className="Homepage__recommended">
			<h2 className="sectionHeader">Recommended for you</h2>
			<ul className="content ">
				{mediaList.length > 0 &&
					mediaList.map((media, i) => {
						return <MediaItem content={media} key={i} />;
					})}
			</ul>
		</section>
	);
};

export default Recommended;
