import { AxiosHeaders, AxiosResponse } from 'axios';
import { Axios } from 'axios';
import { BaseService } from "../../services/BaseService";

const b1 = new BaseService();

// jest.mock('axios', () => {});
const mockedAxios = b1.__clientInstance as jest.Mocked<Axios>;

test("dummy test", () => {
    const mockResponse: AxiosResponse = {
        status: 200,
        data: '{ \
            "data": [{ \
                "name": "Ahmet" \
            }] \
        }',
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

    expect(b1.__responseInterceptor(mockResponse)).toStrictEqual(mockResponseJSON);

    return b1.getTopTrendings().then((response) => {
        expect(true).toBe(true);
    });
});
