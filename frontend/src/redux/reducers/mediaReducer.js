import mediaService from '../service/mediaService';

const mediaReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_MEDIA':
			return action.payload;

		default:
			return state;
	}
};

export const getAllMedia = () => {
	return async dispatch => {
		try {
			const mediaList = await mediaService.getAllMedia();
			dispatch({
				type: 'GET_ALL_MEDIA',
				payload: mediaList,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export default mediaReducer;
