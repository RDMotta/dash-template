import { api } from "../../service/axios-config";
import IUser from "../../types/user.type";

 class UserService {
   getAll() {
    return api.get<Array<IUser>>("/users"); 
   }
}

export default new UserService();