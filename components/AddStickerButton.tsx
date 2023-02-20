import { Alert, Image, Pressable, View, StyleSheet } from 'react-native';

const addIcon = require('../assets/images/icons/plus-solid.png');

type AddStickerButtonProps = {
  onLongPress: string,
};

const AddStickerButton = (props: AddStickerButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#4daffa', borderless: true}}
        onLongPress={() => {Alert.alert(props.onLongPress)}}
      >
        <Image style={styles.image} source={addIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 104,
    height:104,
    borderWidth: 4,
    borderColor: '#4daffa',
    borderRadius: 42,
    padding: 3,
    marginHorizontal: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});

export default AddStickerButton; 
