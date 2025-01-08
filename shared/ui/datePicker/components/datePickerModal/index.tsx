import React, { FC } from "react";
import { Modal, StyleSheet } from "react-native";

import { Colors } from "@/shared/constants/colors";
import { View } from "@/shared/ui/themed/view";

import { IDatePickerState } from "../../interfaces";
import { DatePickerFooter } from "./datePickerFooter";
import { DatePickerHeader } from "./datePickerHeader";
import { DatePickerMain } from "./datePickerMain";

interface IDatePickerModal {
  state: IDatePickerState;
  setState: React.Dispatch<React.SetStateAction<IDatePickerState>>;
}

export const DatePickerModal: FC<IDatePickerModal> = ({ state, setState }) => {
  const { showModal } = state;

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={() =>
        setState((prevState) => ({ ...prevState, showModal: false }))
      }
    >
      <View style={styles.modalContainer}>
        <View style={styles.pickerContainer}>
          <DatePickerHeader setState={setState} state={state} />
          <DatePickerMain setState={setState} state={state} />
          <DatePickerFooter setState={setState} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.light.datePickerBackgroundColor,
  },
  pickerContainer: {
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 20,
  },
});
