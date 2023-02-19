import { StyleSheet, View, Pressable, Text, Image } from 'react-native';

type ButtonProps = {
  label: String,
  theme: String,
  onPress: undefined,
}

const imageIcon = require('../assets/images/icons/image-solid.png');
const cameraIcon = require('../assets/images/icons/camera-solid.png');

const SelectImageButton = (props: ButtonProps): JSX.Element => {
  if (props.theme === "image") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable android_ripple={{color: '#4daffa', borderless: true}} style={[styles.button, {borderColor: '#4daffa'}]} onPress={props.onPress}>
          <Image style={styles.icon} source={imageIcon}/>
          <Text style={styles.buttonLabel}>{props.label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{color: '#ffd33d', borderless: true}} style={styles.button} onPress={props.onPress}>
        <Image style={styles.icon} source={cameraIcon}/>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 155,
    height: 64,
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 10,
    width: 155,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});

export default SelectImageButton;
