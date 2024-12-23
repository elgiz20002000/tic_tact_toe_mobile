import React from 'react';
import { ICompareModal } from '@/shared/interfaces';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '@/shared/constants/Colors';

const CompareModal: React.FC<ICompareModal> = ({ modalVisible, setModalVisible, name }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            style={styles.centeredView}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <View>
                <Text style={styles.title}>Remove a Friend?</Text>
                <Text style={styles.questionText}>
                  Are you sure you want to remove "{name}" from your friends list?
                </Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: Colors.light.backgroundWhite,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 30,
  },
  textStyle: {
    color: Colors.light.blue,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CompareModal;