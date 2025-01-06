import { useState } from "react";
import { SafeAreaView } from "react-native";

import { DatePickerInput } from "./components/datePickerInput";
import { DatePickerModal } from "./components/datePickerModal";
import { IDatePickerState } from "./interfaces";

export const DatePicker = () => {
  const [state, setState] = useState<IDatePickerState>({
    showModal: false,
    selectedDate: null,
    currentDate: new Date(),
    showMonthPicker: false,
    showYearPicker: false,
  });

  return (
    <SafeAreaView>
      <DatePickerInput setState={setState} selectedDate={state.selectedDate} />
      <DatePickerModal state={state} setState={setState} />
    </SafeAreaView>
  );
};
