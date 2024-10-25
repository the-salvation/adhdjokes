import { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FavFilledIcon, FavOutlinedIcon } from "@assets";
import { Joke } from "@types";
import { COLORS } from "@utils";
import Animated, {
  FadeIn,
  SlideInDown,
  Layout,
} from 'react-native-reanimated';

interface JokeCardProps {
  currentJoke: Joke,
  isLiked: boolean,
  onPress: () => void,
}

const TodayJokeCard: FC<JokeCardProps> = ({ isLiked, currentJoke, onPress }) => {
  const { setup, delivery, joke } = currentJoke;
  const isLikeButtonShown = setup || delivery || joke;

  return (
    <View style={styles.jokeContainer}>
      <Animated.View
        style={styles.jokeCard}
        entering={FadeIn.duration(500).springify()}
        layout={Layout.springify()}
      >
        <Text style={styles.jokeText}>
          {setup || joke || 'No joke today 😵‍💫'}
        </Text>
        {delivery ? (
          <Animated.Text
            style={styles.deliveryText}
            entering={SlideInDown.duration(400).springify().delay(300)}
          >
            {delivery}
          </Animated.Text>
        ) : null}
        {isLikeButtonShown ?
          (<TouchableOpacity
            style={styles.likeButton}
            onPress={onPress}
          >
            <Animated.View
              style={[
                styles.likeButtonContainer,
                isLiked && styles.likeButtonContainerActive
              ]}
              entering={FadeIn.delay(600)}
            >
              {isLiked ? <FavFilledIcon /> : <FavOutlinedIcon />}
            </Animated.View>
          </TouchableOpacity>) : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  jokeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 24,
  },
  jokeCard: {
    backgroundColor: COLORS.white,
  },
  jokeText: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    color: COLORS.black,
  },
  deliveryText: {
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 36,
    color: COLORS.black,
    marginTop: 20,
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  likeButtonContainer: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: COLORS.purpleish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonContainerActive: {
    backgroundColor: COLORS.purple,
  },
});

export { TodayJokeCard };
