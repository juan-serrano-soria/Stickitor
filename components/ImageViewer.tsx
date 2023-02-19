import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType,
  selectedImage: string | null,
}

const ImageViewer = (props: ImageViewerProps): JSX.Element => {
  const imageSource = props.selectedImage !== null
    ? { uri: props.selectedImage }
    : props.placeholderImageSource;
  return (
    <Image source={imageSource} style={styles.image} />
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
