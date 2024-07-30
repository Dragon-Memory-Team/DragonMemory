import TagModel from "@/models/TagModel";

export default interface TagService {
    getAllTags(): Promise<TagModel[]>;
}