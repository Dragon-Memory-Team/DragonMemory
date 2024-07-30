import { useEffect, useState } from "react";
import useTagService from "./useTagService";
import TagModel from "@/models/TagModel";
import useDeckService from "./useDeckService";
import Deck from "@/models/Deck";
import Toast from "react-native-root-toast";

interface HomeScreenState {
    loading: boolean,
    tags: TagModel[],
    decks: Deck[],
    error: boolean,
    message: string
}

export default function useHomeScreenViewModel() {
    const tagService = useTagService();
    const deckService = useDeckService();
    const [payload, setPayload] = useState<HomeScreenState>({
        loading: true,
        tags: [],
        decks: [],
        error: false,
        message: ''
    });
    useEffect(() => {
        Promise.all([tagService.getAllTags(), deckService.getAll()])
        .then(responses => {
            const [tags, decks] = responses;
            setPayload({
                tags,
                decks: decks,
                loading: false,
                error: false,
                message: ''
            });
        })
        .catch(err => {
            Toast.show("Erro ao carregar os dados", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER
            })
        })
    }, []);
    return {
        ...payload
    }
}