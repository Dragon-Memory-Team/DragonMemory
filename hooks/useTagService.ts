import TagServiceMock from "@/services/TagServiceMock";

export default function useTagService() {
    return new TagServiceMock();
}