import { Image, View } from 'react-native';
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

type StickerProps = {
  imageWidth: number,
  imageHeight: number
  stickerSource: string,
}

const AnimatedView = Animated.createAnimatedComponent(View);

const Sticker = (props: StickerProps): JSX.Element => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onDrag = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -250, left: 140, }]}>
        <Image
          source={props.stickerSource}
          resizeMode="contain"
          style={{ width: props.imageWidth, height: props.imageHeight }}
        />
      </AnimatedView>
    </PanGestureHandler>
  );
}

export default Sticker;
