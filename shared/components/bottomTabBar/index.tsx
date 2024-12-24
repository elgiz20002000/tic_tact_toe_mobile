import { View, StyleSheet } from 'react-native';
import React from 'react';
import TabBarButton from './button';
import { Colors } from '@/shared/constants/Colors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { RouteName } from './type';

const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
    const primaryColor = Colors.light.backgroundWhite;
    const greyColor = Colors.light.inActiveColor;

    return (
        <View style={styles.tabbar}>
            {state.routes.map((route, index) => {
                if (['_sitemap', '+not-found'].includes(route.name)) return null;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name as RouteName}
                        color={isFocused ? primaryColor : greyColor}
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.light.blue,
        marginHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 16,
        borderCurve: 'continuous',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
        zIndex:1
    },
});

export default BottomTabBar;