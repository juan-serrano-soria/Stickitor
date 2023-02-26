import { Image, ImageSourcePropType, View } from 'react-native';

type StickerProps = {
  imageWidth: number,
  imageHeight: number
  stickerSource: string,
}

const Sticker = (props: StickerProps): JSX.Element => {
  return (
    <View style={{ top: -250, left: 140, }}>
      <Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageWidth, height: props.imageHeight }}
      />
    </View>
  );
}

export default Sticker;
