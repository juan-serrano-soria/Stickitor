import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType,
}

const ImageViewer = (props: ImageViewerProps): JSX.Element => {
  return (
    <Image source={props.placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
