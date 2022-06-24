const MediaItem = ({ content }) => {
	return (
		<li className="MediaItem">
			<img src={content.thumbnail.trending.small} alt="" />
		</li>
	);
};

export default MediaItem;
