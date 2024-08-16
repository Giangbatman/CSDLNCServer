import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { UserInfo } from "./user";

class RoomChat {
    id?: string | undefined;
    users: String[];
    userIdSend: String;
    userIdReceive: String;
    createDate?: number;
    updateDate?: number;
    
    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.users = args?.users ?? [];
        this.userIdSend = args?.userIdSend ?? '';
        this.userIdReceive = args?.userIdReceive ?? '';
        this.createDate = args?.createDate ?? Date.now();
        this.updateDate = args?.updateDate ?? Date.now();
    }
}

export { RoomChat };
