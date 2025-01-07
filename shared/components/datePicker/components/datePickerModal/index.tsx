import React, { FC } from "react";
import { Modal, StyleSheet } from "react-native";

import { View } from "@/shared/components/themed/view";
import { Colors } from "@/shared/constants/Colors";

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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 20,
  },
  weekdaysRow: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  weekday: {
    width: 40,
    textAlign: "center",
    color: Colors.light.textGray,
    fontSize: 12,
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 0.2,
    borderTopColor: Colors.light.textGray,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.light.textGray,
    justifyContent: "flex-start",
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  selectedDay: {
    backgroundColor: Colors.light.blue,
    width: 40,
    height: 40,
  },
  dayText: {
    fontSize: 14,
  },
  selectedDayText: {
    color: Colors.light.white,
    fontWeight: "bold",
  },
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
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownMonthContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderColor: Colors.light.textGray,
    borderWidth: 0.2,
    paddingVertical: 8,
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    width: 140,
  },
  dropdownTextMonth: {
    fontSize: 16,
    marginRight: 20,
  },
  paceholderMonth: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: "100%",
  },
  pickerDropdownMonth: {
    position: "absolute",
    top: 40,
    left: 0,
    zIndex: 10,
    borderColor: Colors.light.textGray,
    borderWidth: 0.2,
    width: "100%",
    maxHeight: 200,
  },
  dropdownMonthItem: {
    padding: 10,
  },
  dropdownYearContainer: {
    marginHorizontal: 10,
    borderColor: Colors.light.textGray,
    borderWidth: 0.2,
    paddingVertical: 8,
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    width: 100,
    paddingHorizontal: 1,
  },
  placeholderYear: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 3,
  },
  dropdownTextYear: {
    fontSize: 16,
    marginRight: 20,
  },
  pickerDropdownYear: {
    position: "absolute",
    top: 40,
    left: 0,
    borderColor: Colors.light.textGray,
    borderWidth: 0.2,
    width: "100%",
    maxHeight: 200,
  },
  dropdownYearItem: {
    padding: 10,
  },
});
