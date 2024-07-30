import Deck from "@/models/Deck";

export default interface DecksService {
    getAll(): Promise<Deck[]>
}