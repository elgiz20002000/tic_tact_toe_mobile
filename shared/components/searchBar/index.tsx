import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={20}
        color={Colors.light.textGray}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
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
    paddingHorizontal: 10,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: Colors.light.textGray,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
});

export default SearchBar;
