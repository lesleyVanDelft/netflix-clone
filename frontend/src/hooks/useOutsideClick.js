import { useEffect } from 'react';

// export const useOutsideClick = (ref, handler) => {
// 	useEffect(() => {
// 		const listener = e => {
// 			if (!ref.current || ref.current.contains(e.target)) {
// 				return;
// 			}

// 			handler(e);
// 		};

// 		document.addEventListener('mousedown', listener);
// 		document.addEventListener('touchstart', listener);

// 		return () => {
// 			document.removeEventListener('mousedown', listener);
// 			document.removeEventListener('touchstart', listener);
// 		};
// 	}, [ref, handler]);
// };

export const useOutsideClick = (ref, callback) => {
	const handleClick = e => {
		if (!ref.current?.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		document.addEventListener('touchstart', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('touchstart', handleClick);
		};
	});
};
