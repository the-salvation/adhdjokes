import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FavFilledIcon, FavOutlinedIcon } from "@assets";
import { Joke } from "@types";
import Animated, {
  FadeIn,
  SlideInDown,
  Layout,
} from 'react-native-reanimated';

import { styles } from './style';

interface JokeCardProps {
  currentJoke: Joke,
  isLiked: boolean,
  onPress: () => void,
}

export const TodayJokeCard: FC<JokeCardProps> = ({ isLiked, currentJoke, onPress }) => {
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


