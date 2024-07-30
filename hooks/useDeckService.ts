import DeckServiceMock from "@/services/DeckServiceMock";

export default function useDeckService() {
    return new DeckServiceMock();
}