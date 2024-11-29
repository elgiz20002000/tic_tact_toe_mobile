import React, { useRef, useState } from "react";
import Text from "@/shared/components/themed/Text";
import View from "@/shared/components/themed/View";
import { StyleSheet, TouchableOpacity } from "react-native";
import SearchBar from "@/shared/components/searchBar";
import { Colors } from "@/shared/constants/Colors";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { players } from "./mockData";
import { EInviteStatus, EStatus } from "./constants";
import { Player } from "./interface";
import BottomSheet from "@/shared/components/bottomSheet";
import PlayerInfo from "@/screens/OnlinePlayers/components/PlayerInfo";
import { IBottomSheetRef } from "@/shared/components/bottomSheet/interfaces";

export const OnlinePlayersScreen = () => {
  const bottomSheetModalRef = useRef<IBottomSheetRef>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null); 

  const handlePresentPress = (player: Player): void => {
    setSelectedPlayer(player); 
    bottomSheetModalRef.current?.present(); 
  };

  const getInviteStatusStyle = (player: Player) => {
    switch (player.inviteStatus) {
      case EInviteStatus.Accepted:
        return styles.accepted;
      case EInviteStatus.Invited:
        return styles.invited;
      case EInviteStatus.Pending:
        return  styles.pending;
      case EInviteStatus.Denied:
        return  styles.denied;
      default:
        return  styles.playingDot;
    }
}
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.headerText}>Online Players</Text>
        <SearchBar />
        {players.map((player, index) => {
          return (
            <View style={styles.playerInfo} key={index}>
              <View>
                <Text>{player.name}</Text>
                <View style={styles.statusContainer}>
                  <View
                    style={[
                      styles.dot,
                      player.status === EStatus.Online
                        ? styles.onlineDot
                        : styles.playingDot,
                    ]}
                  />
                  <Text>{player.status}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={[styles.playerSatusButton, getInviteStatusStyle(player)]}
                  onPress={() => handlePresentPress(player)} 
                >
                  <Text
                    style={
                      player.inviteStatus === EInviteStatus.Invited
                        ? styles.differentText
                        : styles.playerSatusButtonText
                    }
                  >
                    {player.inviteStatus}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <BottomSheet ref={bottomSheetModalRef}>
          {selectedPlayer && (
            <PlayerInfo
              name={selectedPlayer.name}
              status={selectedPlayer.status}
            />
          )}
        </BottomSheet>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  noPlayersInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noPlayersText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.light.text,
  },
  infoContainer: {
    marginTop: 30,
  },
  subText: {
    fontSize: 14,
    color: Colors.light.textGray,
  },
  playerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  playerSatusButton: {
    backgroundColor: Colors.light.backgroundWhite,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  playerSatusButtonText: {
    color: Colors.light.backgroundWhite,
    fontSize: 12,
  },
  differentText: {
    fontSize: 12,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  accepted: {
    backgroundColor: Colors.light.green,
    borderWidth: 0,
  },
  invited: {backgroundColor: Colors.light.backgroundGray,
    borderWidth: 0,
  },
  pending: {
    backgroundColor: Colors.light.blue,
    borderWidth: 0,
  },
  denied: {
    backgroundColor: Colors.light.red,
    borderWidth: 0,
  },
});
