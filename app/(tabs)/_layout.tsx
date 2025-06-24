import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

// Optional: replace className with proper styles if nativewind is not configured
const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                style={styles.focusedTabContainer}
                imageStyle={styles.imageBackgroundStyle}
            >
                <Image source={icon} tintColor="#151312" style={styles.icon} />
                <Text style={styles.focusedTabText}>{title}</Text>
            </ImageBackground>
        );
    }

    return (
        <View style={styles.unfocusedTabContainer}>
            <Image source={icon} tintColor="#A8B5DB" style={styles.icon} />
        </View>
    );
};

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0d23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 64,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#1a1a2e',
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title="Home" />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title="Search" />
                    ),
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.save} title="Saved" />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    ),
                }}
            />
        </Tabs>
    );
};

export default _Layout;

const styles = StyleSheet.create({
    focusedTabContainer: {
        flexDirection: 'row',
        minWidth: 112,
        minHeight: 64,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        overflow: 'hidden',
        paddingHorizontal: 12,
    },
    unfocusedTabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 32,
    },
    imageBackgroundStyle: {
        resizeMode: 'cover',
        borderRadius: 32,
    },
    icon: {
        width: 20,
        height: 20,
    },
    focusedTabText: {
        color: '#F0F0F0',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});
