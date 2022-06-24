import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as BookmarkIconEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkIconFull } from '../../assets/icon-bookmark-full.svg';

// import logo from '../../'

const MediaItem = ({ content, trending }) => {
	return (
		<li className={`MediaItem ${trending ? 'trending' : 'recommended'}`}>
			{/* {trending && ( */}
			<button>
				<BookmarkIconEmpty />
			</button>
			{/* // )} */}
			<figure>
				<img
					src={
						content && trending
							? content.thumbnail.trending.small
							: content.thumbnail.regular.small
					}
					alt=""
				/>
				<figcaption>
					{trending && (
						<div className="MediaItem__details trending">
							<ul className="details">
								<li>{content.year}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category}
								</li>
								<span className="circle"></span>
								<li>{content.rating}</li>
							</ul>

							<h3>{content.title}</h3>
						</div>
					)}

					{trending || (
						<div className="MediaItem__details recommended">
							<ul className="details recommended">
								<li>{content.year}</li>
								<span className="circle"></span>
								<li>
									<MovieIcon />
									{content.category}
								</li>
								<span className="circle"></span>
								<li>{content.rating}</li>
							</ul>

							<h3>{content.title}</h3>
						</div>
					)}
				</figcaption>
			</figure>
		</li>
	);
};

export default MediaItem;
