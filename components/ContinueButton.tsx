import { StyleSheet, View, Pressable, Text, Alert } from 'react-native';

type ButtonProps = {
  label: String,
}

const ContinueButton = (props: ButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable android_ripple={{color: '#25292e', borderless: true}} style={styles.button} onPress={() => Alert.alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{props.label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 64,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: 320,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#3f454d',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ContinueButton;
