import { StyleSheet, View, Pressable, Text, Alert, Image } from 'react-native';

type ButtonProps = {
  label: String,
  theme: String,
}

const imageIcon = require('../assets/images/icons/image-solid.png');
const cameraIcon = require('../assets/images/icons/camera-solid.png');

const SelectImageButton = (props: ButtonProps): JSX.Element => {
  if (props.theme === "image") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, {borderColor: '#4daffa'}]} onPress={() => Alert.alert('You pressed a button.')}>
          <Image style={styles.icon} source={imageIcon}/>
          <Text style={styles.buttonLabel}>{props.label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => Alert.alert('You pressed a button.')}>
        <Image style={styles.icon} source={cameraIcon}/>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 160,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 10,
    width: '100%',
    height: '100%',
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
