import axios from "axios";
const instance = axios.create();
instance.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
	};
	return config;
});
instance.interceptors.response.use(response => {
	return response.status === 200 ? response.data : response;
});
export default instance;
