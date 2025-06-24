import { Image, ScrollView, Text, View, Pressable } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: '#1e1e2e' }}>
            <Image
                source={images.bg}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

            <ScrollView
                style={{ flex: 1, paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: '100%',
                    paddingBottom: 10,
                    paddingTop: 60,
                }}
            >
                {/* Header with Search (Left) and Logo (Right) */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 24,
                    }}
                >
                    <Pressable onPress={() => router.push('/search')}>
                        <Image
                            source={icons.search}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                            tintColor="#ab8bff"
                        />
                    </Pressable>

                    <Image
                        source={icons.logo}
                        style={{ width: 48, height: 40 }}
                        resizeMode="contain"
                    />
                </View>

                {/* Main Search Bar */}
                <View style={{ marginBottom: 24 }}>
                    <SearchBar
                        onPress={() => router.push('/search')}
                        placeholder="Search for a movie"
                    />
                </View>
            </ScrollView>
        </View>
    );
}
