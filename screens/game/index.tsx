import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CircleIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Feather";
import RefreshIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { Colors } from "@/shared/constants/colors";
import { useTheme } from "@/shared/contexts/theme";
import { CompareModal } from "@/shared/ui/compareModal";
import { CompareModalMessages } from "@/shared/ui/compareModal/constants";
import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";

import { EGameStatus, EPlayer } from "./constants";
import { checkWinner } from "./utils/checkWinnerUtils";
import { getSecondaryText, getStatusStyle } from "./utils/gameStatusUtils";

const GameScreen = () => {
  const theme = useTheme();
  const [grid, setGrid] = useState<(EPlayer | null)[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [status, setStatus] = useState<EGameStatus>(EGameStatus.YourTurn);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handlePress = (index: number) => {
    if (
      grid[index] ||
      status === EGameStatus.Winner ||
      status === EGameStatus.Lost
    ) {
      return;
    }

    const newGrid = [...grid];
    newGrid[index] = isPlayerTurn ? EPlayer.X : EPlayer.O;
    setGrid(newGrid);

    const winner = checkWinner(newGrid);
    if (winner) {
      if (winner === EPlayer.X) {
        setStatus(EGameStatus.Winner);
      } else {
        setStatus(EGameStatus.Lost);
      }
      return;
    }
    if (!newGrid.includes(null)) {
      setStatus(EGameStatus.Draw);
      return;
    }
    setIsPlayerTurn(!isPlayerTurn);
    setStatus(isPlayerTurn ? EGameStatus.PleaseWait : EGameStatus.YourTurn);
  };

  const handleReset = () => {
    setGrid(Array(9).fill(null));
    setIsPlayerTurn(true);
    setStatus(EGameStatus.YourTurn);
  };

  const handleLeaveMatch = () => {
    setModalVisible(false);
    router.replace("/(main)/(home)");
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={getStatusStyle(status, styles)}>
          {status.split("!")[0]}!
        </Text>
        {getSecondaryText(status) && (
          <Text style={styles.secondaryText}>{getSecondaryText(status)}</Text>
        )}
        <View style={styles.grid}>
          {grid.map((value, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.cell,
                { backgroundColor: theme.box.background },
                value === EPlayer.X && styles.xCell,
                value === EPlayer.O && styles.oCell,
              ]}
              onPress={() => handlePress(index)}
            >
              {value === EPlayer.X && (
                <View style={styles.iconContainer}>
                  <View style={styles.blurOverlayX} />
                  <Icon name="x" size={40} color={Colors.light.blue} />
                </View>
              )}
              {value === EPlayer.O && (
                <View style={styles.iconContainer}>
                  <View style={styles.blurOverlayO} />
                  <CircleIcon
                    name="circle"
                    size={40}
                    color={Colors.light.red}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.leaveButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="exit-outline" size={20} color={theme.box.icon} />

        <Text style={styles.resetText}>Leave a match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <RefreshIcon name="refresh" size={20} color={theme.box.icon} />
        <Text style={styles.resetText}>Play Again</Text>
      </TouchableOpacity>
      <CompareModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={CompareModalMessages.LeaveMatch.title}
        message={CompareModalMessages.LeaveMatch.message}
        confirmText={CompareModalMessages.LeaveMatch.confirmText}
        cancelText={CompareModalMessages.LeaveMatch.cancelText}
        onConfirm={() => handleLeaveMatch()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 50,
  },
  winnerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.light.blue,
    textAlign: "center",
  },
  loserText: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.light.red,
    textAlign: "center",
  },
  drawText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  secondaryText: {
    fontSize: 16,
    color: Colors.light.textGray,
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    width: 400,
    height: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  xCell: {
    borderWidth: 1,
    borderColor: Colors.light.blue,
  },
  oCell: {
    borderWidth: 1,
    borderColor: Colors.light.red,
  },
  iconContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  blurOverlayX: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.light.box.blurBackgroundX,
  },
  blurOverlayO: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.light.box.blurBackgroundO,
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.6,
    borderColor: Colors.light.textGray,
    borderRadius: 3,
    marginBottom: 30,
    width: "90%",
    alignSelf: "center",
  },
  leaveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.6,
    borderColor: Colors.light.textGray,
    borderRadius: 3,
    alignSelf: "center",
    width: "90%",
    marginBottom: 20,
  },
  resetText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default GameScreen;
