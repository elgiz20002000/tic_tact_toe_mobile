import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { IIcon } from "./type";

export const RouterIcons: {
  [key: string]: (props: IIcon) => React.JSX.Element;
} = {
  home: (props) => <EntypoIcon name="home" size={26} {...props} />,
  onlinePlayers: (props) => (
    <MaterialCommunityIcon name="gamepad" size={26} {...props} />
  ),
  friends: (props) => (
    <MaterialCommunityIcon name="account-group" size={26} {...props} />
  ),
};
