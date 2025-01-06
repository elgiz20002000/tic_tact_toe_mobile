import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Text } from "@/shared/components/themed/text";
import { Colors } from "@/shared/constants/colors";

import { EInviteStatus, EStatus } from "../constants";
import { IPlayerCard, Player } from "../interface";

export const PlayerCard: React.FC<IPlayerCard> = ({
  player,
  index,
  handlePresentPress,
}) => {
  const getInviteStatusStyle = (player: Player) => {
    switch (player.inviteStatus) {
      case EInviteStatus.Accepted:
        return styles.accepted;
      case EInviteStatus.Invited:
        return styles.invited;
      case EInviteStatus.Pending:
        return styles.pending;
      case EInviteStatus.Denied:
        return styles.denied;
      default:
        return styles.playingDot;
    }
  };
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
};

const styles = StyleSheet.create({
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
    fontSize: 14,
  },
  differentText: {
    fontSize: 14,
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
  invited: { backgroundColor: Colors.light.backgroundGray, borderWidth: 0 },
  pending: {
    backgroundColor: Colors.light.blue,
    borderWidth: 0,
  },
  denied: {
    backgroundColor: Colors.light.red,
    borderWidth: 0,
  },
});
