import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "@/shared/constants/colors";
import { Text } from "@/shared/ui/themed/text";

interface IDatePickerDay {
  day: number | null;
  isSelected: boolean;
  handleDaySelect: (day: number) => void;
}

export const DatePickerDay: FC<IDatePickerDay> = ({
  day,
  handleDaySelect,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[styles.day, isSelected ? styles.selectedDay : null]}
      disabled={!day}
      onPress={() => handleDaySelect(day as number)}
    >
      <Text
        style={[styles.dayText, isSelected ? styles.selectedDayText : null]}
      >
        {day}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontWeight:'600',
  },
  selectedDayText: {
    color: Colors.light.white,
    fontWeight: "bold",
  },
});
