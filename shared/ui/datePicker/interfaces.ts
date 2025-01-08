export interface IDatePickerState {
  showModal: boolean;
  selectedDate: Date | null;
  currentDate: Date;
  showMonthPicker: boolean;
  showYearPicker: boolean;
}