import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text className="text-5xl text-primary font-bold">This is the first app build using React Native.</Text>
        <Text>Developer: Md. Abu Yousuf Siam</Text>
    </View>
  );
}
