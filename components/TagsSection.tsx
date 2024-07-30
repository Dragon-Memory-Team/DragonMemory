import Tag from "./atoms/Tag";
import TagModel from "@/models/TagModel";
import { FlatList, View } from "react-native";

export default function TagsSection({tags}: {tags: TagModel[]}) {
    return <FlatList
        ItemSeparatorComponent={() => <View style={{
            width: 20
        }}/>}
        data={tags}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Tag model={item}></Tag>}
    ></FlatList>
}