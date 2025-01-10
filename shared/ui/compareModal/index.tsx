import React from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Colors } from "@/shared/constants/colors";
import { ICompareModal } from "@/shared/interfaces";

import { Text } from "../themed/text";
import { View } from "../themed/view";

export const CompareModal: React.FC<ICompareModal> = ({
  modalVisible,
  setModalVisible,
  title,
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <SafeAreaProvider>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={onConfirm}>
                <Text style={styles.textStyle}>{confirmText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>{cancelText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaProvider>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.box.grayBackground, 
  },
  modalView: {
    width: "80%",
    borderRadius: 20,
    padding: 30,
    shadowColor: Colors.light.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleView:{
     alignItems:'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 30,
  },
  textStyle: {
    color: Colors.light.blue,
    textAlign: "center",
    fontSize: 16,
  },
});
