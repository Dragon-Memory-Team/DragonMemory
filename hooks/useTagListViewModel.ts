import TagModel from "@/models/TagModel";
import { useEffect, useState } from "react";
import useTagService from "./useTagService";

export default function useTagListViewModel() {
    const [tags, setTags] = useState<TagModel[]>([]);
    const [loading, setLoading] = useState(true);
    const tagService = useTagService();
    useEffect(() => {
        tagService.getAllTags()
            .then(tags => {
                setTags(tags);
                setLoading(false);
            })
    }, []);
    return {
        tags,
        loading
    }
}