
export interface ITabBarButton {
    isFocused: boolean;
    label?: string;
    routeName: string;
    color: string;
    onPress: () => void;
    onLongPress: () => void;
}