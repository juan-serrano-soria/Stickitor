import { Alert, Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';

type IconButtonProps = {
  icon: ImageSourcePropType,
  onPress: undefined,
  onLongPress: string,
};

const IconButton = (props: IconButtonProps): JSX.Element => {
  return(
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        android_ripple={{color: '#7c7e81', borderless: true}}
        onPress={props.onPress}
        onLongPress={() => {Alert.alert(props.onLongPress)}}
      >
        <Image source={props.icon} style={styles.image} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 64,
    height:64,
    borderRadius: 40,
    padding: 3,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});

export default IconButton;
