import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { BottomSheet } from "@/shared/ui/bottomSheet";
import { IBottomSheetRef } from "@/shared/ui/bottomSheet/interfaces";
import SearchBar from "@/shared/ui/searchBar";
import { SafeAreaView } from "@/shared/ui/themed/safeAreaView";
import { Text } from "@/shared/ui/themed/text";

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
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Friends</Text>
        <SearchBar />
        <FlatList
          data={players}
          renderItem={renderFriendItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
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
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
