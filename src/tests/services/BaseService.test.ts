import { BaseService } from "../../services/BaseService";
import axios, { AxiosHeaders, AxiosResponse } from "axios";

// jest.mock("axios");
// const axiosMocked = axios as jest.Mocked<typeof axios>;

test("dummy test", () => {
    const b1 = new BaseService();
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
    
    expect(b1.__responseInterceptor(mockResponse)).toStrictEqual(mockResponseJSON);
});
