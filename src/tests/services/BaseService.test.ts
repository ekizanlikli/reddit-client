import { AxiosHeaders, AxiosResponse } from 'axios';
import { Axios } from 'axios';
import { BaseService } from "../../services/BaseService";

const baseServiceInstance = new BaseService();

const mockedAxios = baseServiceInstance.__clientInstance as jest.Mocked<Axios>;

test("dummy test", () => {
    const mockResponse: AxiosResponse = {
        status: 200,
        data: `{ 
            "data": [{ 
                "name": "Ahmet" 
            }] 
        }`,
        statusText: 'Ok',
        headers: {},
        config: {
            headers: new AxiosHeaders()
        },
    }

    const mockResponseJSON: AxiosResponse = {
        status: 200,
        data: { 
            data: [{ 
                name: 'Ahmet' 
            }] 
        },
        statusText: 'Ok',
        headers: {},
        config: {
            headers: new AxiosHeaders()
        },
    }

    jest.spyOn(mockedAxios, 'get').mockResolvedValue(mockResponse);

    expect(baseServiceInstance.__responseInterceptor(mockResponse)).toStrictEqual(mockResponseJSON);

    return baseServiceInstance.getTopTrendings().then((response) => {
        expect(true).toBe(true);
    });
});
