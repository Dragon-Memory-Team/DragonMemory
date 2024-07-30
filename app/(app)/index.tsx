import ThemedSubtitle from "@/components/atoms/ThemedTitle";
import ThemedView from "@/components/atoms/ThemedView";
import Header from "@/components/Header";
import TagsSection from "@/components/TagsSection";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { View } from "react-native";
import SkeletonLoading from "@/components/atoms/SkeletonLoading";
import Decks from "@/components/atoms/Decks";
import useHomeScreenViewModel from "@/hooks/useHomeScreenViewModel";
import ThemedText from "@/components/atoms/ThemedText";
import Prancheta from '@/assets/images/prancheta.svg';

export default function HomeScreen() {
  const { loading, tags, decks } = useHomeScreenViewModel();
  const { theme } = useApplicationContext();
  return (
    <ThemedView>
      <Header />
      <View style={{
        flex: 1,
        paddingHorizontal: 39,
        paddingVertical: 24,
        flexDirection: 'column',
      }}>
        {
          (loading && decks.length == 0) || (!loading && decks.length > 0) ? <>
            <View>
              <ThemedSubtitle style={{
                marginBottom: 15
              }}>Tags</ThemedSubtitle>
              <SkeletonLoading
                style={{
                  width: '100%',
                  height: 50
                }}
                isLoading={loading}
                color={theme.accent}
              >
                <TagsSection tags={tags} />
              </SkeletonLoading>
            </View>
            <View style={{
              marginTop: 15,
              height: '74%'
            }}>
              <ThemedSubtitle style={{
                marginBottom: 15
              }}>Meus Baralhos</ThemedSubtitle>
              <SkeletonLoading isLoading={loading} color={theme.accent} style={{
                width: '100%',
                height: 300,
              }}>
                <Decks decks={decks} />
              </SkeletonLoading>
            </View>
          </>
            : <View style={{
              alignItems: 'center',
              flex: 1,
              marginTop: 50
            }}>
              <Prancheta style={{
                marginBottom: 46
              }}/>
              <ThemedSubtitle style={{
                fontSize: 20,
                color: theme.title,
                marginBottom: 14
              }}>Nada para ver aqui!</ThemedSubtitle>
              <ThemedText style={{
                color: theme.bodyText,
                fontSize: 16,
                textAlign: 'center'
              }}>Clique no botão de adicionar para criar uma carta dentro do seu baralho padrão ou crie um novo baralho para começar</ThemedText>
            </View>
        }
      </View>
    </ThemedView >
  );
}
