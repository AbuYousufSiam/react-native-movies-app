import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
            }}
        >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#222', textAlign: 'center', marginBottom: 12 }}>
                This is the first app built using React Native.
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>Developer: Md. Abu Yousuf Siam</Text>

        </View>
    );
}
