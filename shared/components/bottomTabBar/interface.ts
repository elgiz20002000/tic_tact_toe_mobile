import { RouteName } from "./type";

export interface ITabBarButton {
    isFocused: boolean;
    label?: string;
    routeName: RouteName;
    color: string;
    onPress: () => void;
    onLongPress: () => void;
}