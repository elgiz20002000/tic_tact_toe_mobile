import React, { FC, useMemo } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import DropDownIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";
import { Colors } from "@/shared/constants/colors";
import { useTheme } from "@/shared/contexts/theme";

import { MONTHS } from "../../constants";
import { getYears } from "../../helpers";
import { IDatePickerState } from "../../interfaces";
interface IDatePickerHeader {
  state: IDatePickerState;
  setState: React.Dispatch<React.SetStateAction<IDatePickerState>>;
}

export const DatePickerHeader: FC<IDatePickerHeader> = ({
  setState,
  state,
}) => {
  const theme = useTheme();
  const years = useMemo(() => getYears(), []);
  const { currentDate, showMonthPicker, showYearPicker } = state;
  const handleMonthChange = (direction: number): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setState((prevState) => ({ ...prevState, currentDate: newDate }));
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => handleMonthChange(-1)}>
        <Icon name="arrow-back" size={18} color={theme.box.icon} />
      </TouchableOpacity>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          onPress={() =>
            setState((prevState) => ({
              ...prevState,
              showMonthPicker: !showMonthPicker,
            }))
          }
          style={styles.dropdownMonthContainer}
        >
          <View style={styles.paceholderMonth}>
            <Text style={styles.dropdownTextMonth}>
              {MONTHS[currentDate.getMonth()]}
            </Text>
            <DropDownIcon name="down" size={15} color={theme.box.icon} />
          </View>
          {showMonthPicker && (
            <View style={styles.pickerDropdownMonth}>
              <ScrollView>
                {MONTHS.map((month, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      const newDate = new Date(
                        currentDate.getFullYear(),
                        index,
                        1
                      );
                      setState((prevState) => ({
                        ...prevState,
                        currentDate: newDate,
                        showMonthPicker: false,
                      }));
                    }}
                  >
                    <Text style={styles.dropdownMonthItem}>{month}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setState((prevState) => ({
              ...prevState,
              showYearPicker: !showYearPicker,
            }))
          }
          style={styles.dropdownYearContainer}
        >
          <View style={styles.placeholderYear}>
            <Text style={styles.dropdownTextYear}>
              {currentDate.getFullYear()}
            </Text>
            <DropDownIcon name="down" size={15} color={theme.box.icon} />
          </View>
          {showYearPicker && (
            <View style={styles.pickerDropdownYear}>
              <ScrollView>
                {years.map((year, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      const newDate = new Date(year, currentDate.getMonth(), 1);
                      setState((prevState) => ({
                        ...prevState,
                        currentDate: newDate,
                        showYearPicker: false,
                      }));
                    }}
                  >
                    <Text style={styles.dropdownYearItem}>{year}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleMonthChange(1)}>
        <Icon name="arrow-forward" size={18} color={theme.box.icon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 20,
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
    borderWidth: 0.3,
    paddingVertical: 8,
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
    width: 140,
    paddingHorizontal: 1,
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
    top: 50,
    left: 0,
    zIndex: 10,
    borderColor: Colors.light.textGray,
    borderWidth: 0.3,
    width: "100%",
    maxHeight: 200,
  },
  dropdownMonthItem: {
    padding: 10,
  },
  dropdownYearContainer: {
    marginHorizontal: 10,
    borderColor: Colors.light.textGray,
    borderWidth: 0.3,
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
    top: 50,
    left: 0,
    borderColor: Colors.light.textGray,
    borderWidth: 0.3,
    width: "100%",
    maxHeight: 200,
  },
  dropdownYearItem: {
    padding: 10,
  },
});
