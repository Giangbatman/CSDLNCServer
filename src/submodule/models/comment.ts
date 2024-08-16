import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { UserInfo } from "./user";

class Comment {
    id?: string | undefined;
    idTopic: string | undefined;
    idUser: string | undefined;
    content: string;
    react?: {
        type: number,
        idUser: string
    }[];
    status?: number;
    index?: number;
    userInfo?: UserInfo | null;
    createDate?: number;
    updateDate?: number;
    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.idTopic = args?.idTopic ?? null;
        this.idUser = isObject(args.idUser) ? new UserInfo(args.idUser)?._id : (args?.idUser ?? undefined);
        this.userInfo = isObject(args.idUser) ? new UserInfo(args.idUser) : (args.userInfo ?? null);
        this.content = args?.content ?? '';
        this.react = args?.react ?? [];
        this.status = args?.status ?? TTCSconfig.STATUS_PUBLIC;
        this.index = args?.index ?? 0;
        this.createDate = args?.createDate ?? Date.now();
        this.updateDate = args?.updateDate ?? Date.now();
    }
}

export { Comment };
