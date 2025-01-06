import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { BottomSheet } from "@/shared/components/bottomSheet";
import { IBottomSheetRef } from "@/shared/components/bottomSheet/interfaces";
import SearchBar from "@/shared/components/searchBar";
import { Text } from "@/shared/components/themed/text";
import { View } from "@/shared/components/themed/view";

import { PlayerCard } from "../onlinePlayers/components/playerCard";
import { PlayerInfo } from "../onlinePlayers/components/playerInfo";
import { Player } from "../onlinePlayers/interface";
import { players } from "../onlinePlayers/mockData";

export const FriendsScreen = () => {
  const bottomSheetModalRef = useRef<IBottomSheetRef>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePresentPress = (player: Player): void => {
    setSelectedPlayer(player);
    bottomSheetModalRef.current?.present();
  };

  const renderFriendItem = ({
    item,
    index,
  }: {
    item: Player;
    index: number;
  }) => (
    <PlayerCard
      key={index}
      player={item}
      index={index}
      handlePresentPress={handlePresentPress}
    />
  );

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.headerText}>Friends</Text>
        <SearchBar />
        <FlatList
          data={players}
          renderItem={renderFriendItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <BottomSheet ref={bottomSheetModalRef}>
        {selectedPlayer && (
          <PlayerInfo
            name={selectedPlayer.name}
            status={selectedPlayer.status}
            isFriend
          />
        )}
      </BottomSheet>
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
});
