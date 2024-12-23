import React, { useState } from 'react';
import Text from '@/shared/components/themed/Text';
import { TouchableOpacity, View } from 'react-native';
import StatisticsCard from '@/screens/Home/components/StatisticCard';
import { Colors } from '@/shared/constants/Colors';
import { StyleSheet } from 'react-native';
import { IPlayerInfo } from '@/screens/OnlinePlayers/interface';
import { EStatus } from '@/screens/OnlinePlayers/constants';
import CompareModal from '@/shared/components/compareModal';



const PlayerInfo: React.FC<IPlayerInfo> = ({ name, status, isFriend = false }) => {
const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.playerInfoContainer}>
      <View style={styles.playerNameContainer}>
        <Text style={styles.playerName}>{name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.dot,
              status === EStatus.Online ? styles.onlineDot : styles.playingDot,
            ]}
          />
          <Text>{status}</Text>
        </View>
      </View>
      <StatisticsCard wins={24} losses={18} draws={5} />
      <TouchableOpacity style={[styles.button,isFriend && styles.removeButton]} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          {isFriend ? 'Remove a Friend' : 'Add a Friend'}
        </Text>
      </TouchableOpacity>
      <CompareModal modalVisible={modalVisible} setModalVisible={setModalVisible} name={name}/>
    </View>
  );
};

const styles = StyleSheet.create({
  playerInfoContainer: {
    width: '100%',
  },
  playerNameContainer: {
    alignItems: 'center',
    textAlign: 'center',
  },
  statusContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  onlineDot: {
    backgroundColor: Colors.light.green,
  },
  playingDot: {
    backgroundColor: Colors.light.red,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.light.blue,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light.backgroundWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton:{
    backgroundColor: Colors.light.red,
  }
});

export default PlayerInfo;