import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "@/shared/constants/colors";
import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";

import { IDatePickerState } from "../../interfaces";

interface IDatePickerFooter {
  setState: React.Dispatch<React.SetStateAction<IDatePickerState>>;
}

export const DatePickerFooter: FC<IDatePickerFooter> = ({ setState }) => {
  const handleReset = (): void => {
    setState((prevState) => ({
      showModal: prevState.showModal,
      selectedDate: new Date(),
      currentDate: new Date(),
      showMonthPicker: false,
      showYearPicker: false,
    }));
  };

  const handleDone = (): void => {
    setState((prevState) => ({ ...prevState, showModal: false }));
  };
  return (
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonTextReset}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  resetButton: {
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.light.blue,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  doneButton: {
    padding: 10,
    backgroundColor: Colors.light.blue,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonTextReset: {
    color: Colors.light.blue,
    fontSize: 16,
  },
  buttonText: {
    color: Colors.light.white,
    fontSize: 16,
  },
});
