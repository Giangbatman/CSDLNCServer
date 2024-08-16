import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { Topic } from "./topic";

class TopicProgress {
    _id?: string;
    idTopic?: string;
    topicInfo?: Topic;
    idCourse?: string;
    idUser?: string;
    status: number; // trạng thái đã học, chưa học, đang học
    type?: number; // type = 1 chương trình học , type = 2 đề kiểm tra
    timeStudy: number | null; // thời gian học bài đó (tính bằng giây)
    score: number;
    correctQuestion: number;
    answers: {
        idQuestion: string,
        idAnswer: string
    }[];
    path: string;
    lastUpdate: number | null;
    createDate: number | null

    constructor(args?: any) {
        if (!args) {
            args = {}
        }
        this._id = args._id ?? undefined;
        this.idTopic = args.idTopic ?? undefined;
        this.idTopic = isObject(args.idTopic) ? new Topic(args.idTopic)?.id : (args?.idTopic ?? undefined);
        this.topicInfo = isObject(args.idTopic) ? new Topic(args.idTopic) : (args.topicInfo ?? null);
        this.idCourse = args.idCourse ?? undefined;
        this.idUser = args.idUser ?? undefined;
        this.status = args.status ?? TTCSconfig.STATUS_LEARN_NONE;
        this.timeStudy = args.timeStudy ?? null;
        this.score = args.score ?? 0;
        this.type = args.type ?? 0;
        this.correctQuestion = args.correctQuestion ?? 0;
        this.answers = args.answers ?? [];
        this.path = args.path ?? undefined;
        this.lastUpdate = args.lastUpdate ?? null;
        this.createDate = args.createDate ?? null
    }
}

export { TopicProgress }