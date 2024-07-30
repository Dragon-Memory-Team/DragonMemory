import TagModel from "@/models/TagModel";
import TagService from "./TagService";

export default class TagServiceMock implements TagService {
    getAllTags(): Promise<TagModel[]> {
        return new Promise((resolve, reject) => {
            const jinx = Math.random();
            setTimeout(() => {
                console.log('JINX GENERATED FOR ' + TagServiceMock.name, jinx)
                if(jinx < 0.3) {
                    return []
                }
                if(jinx > 0.7) return reject({
                    status: 403,
                    message: "Erro ao carregar as tags"
                });
                return resolve([
                    {
                        id: '1',
                        name: 'Biology'
                    },
                    {
                        id: '2',
                        name: 'Historia'
                    },
                    {
                        id: '3',
                        name: 'Geografia'
                    },
                    {
                        id: '4',
                        name: 'Matemática'
                    },
                    {
                        id: '5',
                        name: 'Física'
                    },
                    {
                        id: '6',
                        name: 'Química'
                    }
                ])
            }, 1000);
        });  
    }
}