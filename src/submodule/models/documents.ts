import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { Question } from "./question";

class Documents {
  id?: string | undefined;
  // items?: [
  //   {
  //       createDate?: 0;
  //       updateDate?: 0;
  //       index?: 0;
  //       size?: 1016328;
  //       _id?: "63eb65f34bd73c69919dc918";
  //       url?: "https://storage.googleapis.com/hocthongminhs.appspot.com/undefined/2023/02/14/87937788.pdf"
  //   }
  // ];
  status?: number;
  reviewStatus?: number;
  index?: number;
  type: number;
  description: string;
  slug: string;
  shortDes?: string;
  avatar?: string;
  idCourse: string | null;
  parentId: string | null;
  createDate?: number;
  updateDate?: number;
  startDate?: number;
  endDate?: number;
  
  constructor(args?: any) {
    this.id = args?._id ?? args?.id ?? undefined;
    this.status = args?.status ?? null;
    this.reviewStatus = args?.reviewStatus ?? null;
    this.index = args?.index ?? 0;
    this.type = args?.type ?? null;
    this.description = args?.description ?? "";
    this.slug = args?.slug ?? "";
    this.shortDes = args?.shortDes ?? "";
    this.avatar = args?.avatar ?? "";
    this.idCourse = args?.idCourse ?? "";
    this.parentId = args?.parentId ?? null;
    this.createDate = args?.createDate ?? undefined;
    this.updateDate = args?.updateDate ?? undefined;
    this.startDate = args?.startDate ?? undefined;
    this.endDate = args?.endDate ?? undefined;
  }
}

export { Documents };
