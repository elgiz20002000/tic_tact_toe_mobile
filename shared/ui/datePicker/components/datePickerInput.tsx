import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Text } from "@/shared/ui/themed/text";
import { Colors } from "@/shared/constants/colors";

import { IDatePickerState } from "../interfaces";

interface IDatePickerInput {
  setState: (value: React.SetStateAction<IDatePickerState>) => void;
  selectedDate: Date | null;
}

export const DatePickerInput: FC<IDatePickerInput> = ({
  selectedDate,
  setState,
}) => {
  return (
    <TouchableOpacity
      style={styles.dateButton}
      onPress={() =>
        setState((prevState) => ({ ...prevState, showModal: true }))
      }
    >
      <Icon name="calendar-today" size={20} color={Colors.light.textGray} />
      <Text style={styles.dateText}>
        {selectedDate
          ? selectedDate.toLocaleDateString("en-US")
          : "Choose Date"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.light.textGray,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: Colors.light.textGray,
    marginLeft: 10,
  },
});
