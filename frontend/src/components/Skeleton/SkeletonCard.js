import Skeleton from 'react-loading-skeleton';

const SkeletonCard = ({ list, height, width }) => {
	return Array(list)
		.fill(0)
		.map((_, i) => {
			return (
				<div className="skeleton-card" key={i}>
					<Skeleton height={height} width={width} count={5} />
				</div>
			);
		});
};

export default SkeletonCard;
