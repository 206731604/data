import axios from "axios";
import qs from "qs";
const instance = axios.create();
instance.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
	};
	if (config.data && !(config.data instanceof FormData)) {
		config.data = qs.stringify(config.data);
	}
	return config;
});
instance.interceptors.response.use(response => {
	return response.status === 200 ? response.data : response;
});
export default instance;
