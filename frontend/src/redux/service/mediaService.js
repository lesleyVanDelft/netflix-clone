import axios from 'axios';

const API_URL = '/api/media';

const getAllMedia = async () => {
	const response = await axios.get(`${API_URL}/all`);
	return response.data;
};

const mediaService = {
	getAllMedia,
};

export default mediaService;
