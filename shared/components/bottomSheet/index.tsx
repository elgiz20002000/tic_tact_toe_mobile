import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "../../contexts/Theme";
import { IBottomSheet, IBottomSheetRef } from "./interfaces";

export const BottomSheet = forwardRef<IBottomSheetRef, IBottomSheet>(
  ({ children }, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const theme = useTheme();

    useImperativeHandle(ref, () => ({
      present: () => bottomSheetModalRef.current?.present(),
      close: () => bottomSheetModalRef.current?.close(),
    }));

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={[230]}
        enableOverDrag={false}
        backgroundStyle={styles.background}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.6}
            pressBehavior="close"
          />
        )}
        handleComponent={null}
      >
        <BottomSheetView
          style={[
            styles.contentContainer,
            { backgroundColor: theme.background },
          ]}
        >
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  background: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
