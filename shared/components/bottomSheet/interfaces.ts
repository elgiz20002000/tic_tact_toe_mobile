import React from "react";

export interface IBottomSheet {
  children: React.ReactNode;
}

export interface IBottomSheetRef {
  present: () => void;
  close: () => void;
}
