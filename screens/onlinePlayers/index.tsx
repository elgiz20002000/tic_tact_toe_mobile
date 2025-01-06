import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { PlayerInfo } from "@/screens/onlinePlayers/components/playerInfo";
import { BottomSheet } from "@/shared/components/bottomSheet";
import { IBottomSheetRef } from "@/shared/components/bottomSheet/interfaces";
import SearchBar from "@/shared/components/searchBar";
import { Text } from "@/shared/components/themed/text";
import { View } from "@/shared/components/themed/view";
import { Colors } from "@/shared/constants/colors";

import { PlayerCard } from "./components/playerCard";
import { Player } from "./interface";
import { players } from "./mockData";

export const OnlinePlayersScreen = () => {
  const bottomSheetModalRef = useRef<IBottomSheetRef>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePresentPress = (player: Player): void => {
    setSelectedPlayer(player);
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.headerText}>Online Players</Text>
        <SearchBar />
        <FlatList
          data={players}
          renderItem={({ item, index }) => (
            <PlayerCard
              key={index}
              player={item}
              index={index}
              handlePresentPress={handlePresentPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
});

export default OnlinePlayersScreen;
