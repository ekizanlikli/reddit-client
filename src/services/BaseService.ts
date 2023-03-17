import { Axios, AxiosResponse } from "axios";

export class BaseService {
    private _http: Axios;

    constructor() {
        this._http = new Axios({
            baseURL: `${process.env.REACT_APP_API_SITE}`,
        });

        this._http.interceptors.response.use(this.__responseInterceptor);
    }

    __responseInterceptor = (response: AxiosResponse) => {
        response.data = JSON.parse(response.data);
        return response;
    }

    getTopTrendings(): Promise<AxiosResponse> {
        return this._http.get("/top.json");
    }
}