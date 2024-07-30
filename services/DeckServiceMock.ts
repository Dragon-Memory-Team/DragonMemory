import Deck from "@/models/Deck";
import DecksService from "./DecksService";

export default class DeckServiceMock implements DecksService {
    getAll(): Promise<Deck[]> {
        return new Promise((resolve, reject) => {
            const jinx = Math.random();
            setTimeout(() => {
                console.log('JINX GENERATED FOR ' + DeckServiceMock.name, jinx)
                if(jinx < 0.3) {
                    return []
                }
                if(jinx > 0.7) return reject({
                    status: 403,
                    message: "Erro ao carregar os decks"
                });
                return resolve([
                    {
                        id: '1',
                        name: 'Deck de Japonês Iniciante',
                        quantity: 20
                    },
                    {
                        id: '2',
                        name: 'Deck de Inglês Iniciante',
                        quantity: 500
                    },
                    {
                        id: '3',
                        name: 'Deck de Português Iniciante',
                        quantity: 500
                    },
                    {
                        id: '4',
                        name: 'Deck de Português Iniciante',
                        quantity: 200
                    }
                ])
            }, 3000);
        });
    }
}