import { FlatList, Image, ImageSourcePropType, Platform, Pressable, StyleSheet, View } from 'react-native';

type StickerListProps = {
  onSelect: Function,
  onClose: Function,
  stickers: [ImageSourcePropType],
}

const StickerList = (props: StickerListProps): JSX.Element => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={props.stickers}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              props.onSelect(item);
              props.onClose();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default StickerList;
