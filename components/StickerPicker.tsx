import { Modal, Image, View, Text, Pressable, StyleSheet } from 'react-native';

type StickerPickerProps = {
  isVisible: boolean,
  onClose: undefined,
}

const closeIcon = require('../assets/images/icons/xmark-solid.png');

const StickerPicker = (props: StickerPickerProps): JSX.Element => {
  return(
    <Modal animationType='slide' transparent={true} visible={props.isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Choose a sticker!</Text>
          <Pressable onPress={props.onClose}>
            <Image source={closeIcon} style={styles.image} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: '25%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#191c20',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleContainer: {
    height: '15%',
    backgroundColor: '#464C55',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
  image: {
    width:15,
    height: 15,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});

export default StickerPicker;
