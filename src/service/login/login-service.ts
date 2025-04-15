import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosClient } from "../axios-client";
import { LoginResponse, LoginRequest } from "./login-service-protocol";

export class LoginService {
    private path: string;

    private axiosClientWrapper: AxiosClient;

    constructor() {
        this.path = `/login`;
        this.axiosClientWrapper = new AxiosClient()
    }

    async login(auth: LoginRequest): Promise<any> {
        const response = await (await this.axiosClientWrapper.buildAxiosWithHeaders()).post(`${this.path}`, {
            userName: auth.userName,
            password: auth.password,
        })

        await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
        await AsyncStorage.setItem('token', JSON.stringify(response.data.token))

        return response.data;
    }

    async validateUser(token: string): Promise<any> {
        (await this.axiosClientWrapper.buildAxiosWithHeaders()).defaults.headers["Authorization"] = `Bearer ${token}`

        const response = await (await this.axiosClientWrapper.buildAxiosWithHeaders()).get('/profile')
        return response.data
    }
}