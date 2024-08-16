import TTCSconfig from "../common/config";

class UserInfo {
    _id?: string;
    account: string;
    password: string;
    name: string;
    email: string;
    classNumber: number;
    loginCode?: number;
    phoneNumber?: string;
    avatar?: string;
    address?: string;
    facebookId?: string;
    googleId?: string;
    birth?: number;
    gender?: number;
    registerDate?: number;
    token?: string;
    age?: number = 0;
    lastLogin?: number;
    status?:number;
    userRole?:number; // 1 user, 0 : admin
    passwordResetExpires: number;
    progress ?: {
        [courseId:string]: {
            idTopic: string, // id bài học
            status: number, // trạng thái đã học, chưa học, đang học
            timeStudy: number, // thời gian học bài đó (tính bằng giây)
            score: number,
            correctQuestion: number,
            answers: {
                idQuestion : string, 
                idAnswer: string
            }[]
        }[]
    }; // bài học đã học
    verification_code?: string;
    verification_created_at?: number
    constructor(args?: any) {
        if (!args) {
            args = {};
        }
        this._id = args._id ?? undefined;
        this.account = args.account ?? "";
        this.name = args.name ?? "";
        this.avatar = args.avatar ?? "";
        this.classNumber = args.classNumber ?? 0;
        this.loginCode = args.loginCode ?? TTCSconfig.LOGIN_FAILED;
        this.email = args.email ?? "";
        this.phoneNumber = args.phoneNumber ?? "";
        this.password = args.password ?? "";
        this.address = args.address ?? "";
        this.facebookId = args.facebookId ?? "";
        this.googleId = args.googleId ?? "";
        this.birth = args.birth ?? 0;
        this.gender = args.gender ?? TTCSconfig.GENDER_MALE;
        this.registerDate = args.registerDate ?? 0;
        this.token = args.token ?? "";
        this.lastLogin = args.lastLogin ?? Date.now()
        this.status = args.status ?? 1;
        this.userRole = args?.userRole ?? 1;
        this.progress = args.progress ?? undefined;
        this.passwordResetExpires = args?.passwordResetExpires ?? 0;
        this.verification_code = args.verification_code;
        this.verification_created_at = args.verification_created_at;
    }
}


export { UserInfo };

