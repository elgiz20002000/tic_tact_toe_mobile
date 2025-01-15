import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

import { StatisticsCard } from "@/screens/home/components/statisticCard";
import { EStatus } from "@/screens/onlinePlayers/constants";
import { IPlayerInfo } from "@/screens/onlinePlayers/interface";
import { Colors } from "@/shared/constants/colors";
import { CompareModal } from "@/shared/ui/compareModal";
import { CompareModalMessages } from "@/shared/ui/compareModal/constants";
import { Text } from "@/shared/ui/themed/text";

export const PlayerInfo: React.FC<IPlayerInfo> = ({
  name,
  status,
  isFriend = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    router.replace("/game");
  };

  
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
      <TouchableOpacity
        style={[styles.button, isFriend && styles.removeButton]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          {isFriend ? "Remove a Friend" : "Add a Friend"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => handlePress()}>
        <Text style={styles.buttonText}>Go to game</Text>
      </TouchableOpacity>
      <CompareModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={CompareModalMessages.RemoveFriend(name).title}
        message={CompareModalMessages.RemoveFriend(name).message}
        confirmText={CompareModalMessages.RemoveFriend(name).confirmText}
        cancelText={CompareModalMessages.RemoveFriend(name).cancelText}
        onConfirm={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  playerInfoContainer: {
    width: "100%",
  },
  playerNameContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  statusContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
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
    alignItems: "center",
  },
  buttonText: {
    color: Colors.light.backgroundWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: Colors.light.red,
  },
});
