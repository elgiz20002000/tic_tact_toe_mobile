import React, { FC, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "@/shared/components/themed/text";
import { View } from "@/shared/components/themed/view";
import { Colors } from "@/shared/constants/colors";

import { WEEKDAYS } from "../dateConstant";
import { getDays } from "../helpers";
import { IDatePickerState } from "../interfaces";

interface IDatePickerMain {
  state: IDatePickerState;
  setState: React.Dispatch<React.SetStateAction<IDatePickerState>>;
}
export const DatePickerMain: FC<IDatePickerMain> = ({ setState, state }) => {
  const { currentDate, selectedDate } = state;
  const days = useMemo(() => getDays(currentDate), [currentDate]);

  const handleDaySelect = (day: number): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setState((prevState) => ({ ...prevState, selectedDate: newDate }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.weekdaysRow}>
        {WEEKDAYS.map((day, index) => (
          <Text key={index} style={styles.weekday}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.daysGrid}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.day,
              day === selectedDate?.getDate() &&
              currentDate.getMonth() === selectedDate?.getMonth() &&
              currentDate.getFullYear() === selectedDate?.getFullYear()
                ? styles.selectedDay
                : null,
            ]}
            disabled={!day}
            onPress={() => handleDaySelect(day as number)}
          >
            <Text
              style={[
                styles.dayText,
                day === selectedDate?.getDate() &&
                currentDate.getMonth() === selectedDate?.getMonth() &&
                currentDate.getFullYear() === selectedDate?.getFullYear()
                  ? styles.selectedDayText
                  : null,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
  weekdaysRow: {
    marginBottom: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  weekday: {
    width: 40,
    textAlign: "center",
    color: Colors.light.textGray,
    fontSize: 12,
  },
  daysGrid: {
    flexDirection: "row",
    alignItems: "center",
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
});
