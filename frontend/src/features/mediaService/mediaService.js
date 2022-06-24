import axios from 'axios';

const API_URL = '/api/media';

export const getAllMedia = async () => {
	const response = await axios.get(`${API_URL}/all`);
	return response.data;
};
