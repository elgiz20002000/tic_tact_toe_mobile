import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import View from '@/shared/components/themed/View';
import Text from '@/shared/components/themed/Text';
import SearchBar from '@/shared/components/searchBar';
import { players } from '../OnlinePlayers/mockData';
import PlayerCard from '../OnlinePlayers/components/PlayerCard';
import { Player } from '../OnlinePlayers/interface';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { IBottomSheetRef } from '@/shared/components/bottomSheet/interfaces';
import BottomSheet from '@/shared/components/bottomSheet';
import PlayerInfo from '../OnlinePlayers/components/PlayerInfo';

export const FriendsScreen = () => {
  const bottomSheetModalRef = useRef<IBottomSheetRef>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePresentPress = (player: Player): void => {
    setSelectedPlayer(player);
    bottomSheetModalRef.current?.present();
  };

  const renderFriendItem = ({ item, index }: { item: Player; index: number }) => (
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
            isFriend={true} // Pass the isFriend prop
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default FriendsScreen;