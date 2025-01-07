import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useTheme } from "@/shared/contexts/theme";

import { Colors } from "../../constants/colors";

const SearchBar = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={20}
        color={Colors.light.textGray}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, { color: theme.inputText }]}
        placeholder="Search Players"
        placeholderTextColor={Colors.light.textGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: Colors.light.textGray,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical:10
  },
});

export default SearchBar;
