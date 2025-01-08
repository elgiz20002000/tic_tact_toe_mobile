import React, { FC, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Colors } from "@/shared/constants/colors";
import { useScreenSize } from "@/shared/hooks/useScreenSize";
import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";

import { WEEKDAYS } from "../../constants";
import { getDays } from "../../helpers";
import { IDatePickerState } from "../../interfaces";
import { DatePickerDay } from "./datePickerDay";

interface IDatePickerMain {
  state: IDatePickerState;
  setState: React.Dispatch<React.SetStateAction<IDatePickerState>>;
}
export const DatePickerMain: FC<IDatePickerMain> = ({ setState, state }) => {
  const { currentDate, selectedDate } = state;
  const { isSmallScreen } = useScreenSize();

  const days = useMemo(() => getDays(currentDate), [currentDate]);

  const currentDateMonth = currentDate.getMonth();
  const currentDateYear = currentDate.getFullYear();

  const selectedDateMonth = selectedDate?.getMonth();
  const selectedDateYear = selectedDate?.getFullYear();
  const selectedDateDay = selectedDate?.getDate();

  const handleDaySelect = (day: number): void => {
    const newDate = new Date(currentDateYear, currentDateMonth, day);
    setState((prevState) => ({ ...prevState, selectedDate: newDate }));
  };

  return (
    <View style={{ paddingHorizontal: isSmallScreen ? 5 : 20 }}>
      <View style={styles.weekdaysRow}>
        {WEEKDAYS.map((day, index) => (
          <Text key={index} style={styles.weekday}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.daysGrid}>
        {days.map((day, index) => {
          const isSelected =
            day === selectedDateDay &&
            currentDateMonth === selectedDateMonth &&
            currentDateYear === selectedDateYear;

          return (
            <DatePickerDay
              key={index}
              day={day}
              handleDaySelect={handleDaySelect}
              isSelected={isSelected}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderTopWidth: 0.3,
    borderTopColor: Colors.light.textGray,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light.textGray,
    justifyContent: "flex-start",
    width: 280,
  },
});
