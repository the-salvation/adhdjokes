import { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FavFilledIcon, FavOutlinedIcon } from "@assets";
import { Joke } from "@types";
import { COLORS } from "@utils";

interface JokeCardProps {
  currentJoke: Joke,
  isLiked: boolean,
  onPress: () => void,
}

const TodayJokeCard: FC<JokeCardProps> = ({ isLiked, currentJoke, onPress }) => {
  return (
    <View style={styles.jokeContainer}>
      <View style={styles.jokeCard}>
        <Text style={styles.jokeText}>
          {currentJoke?.setup || 'No joke today 😵‍💫'}
        </Text>
        {currentJoke.delivery ? (
          <Text style={styles.deliveryText}>{currentJoke.delivery}</Text>
        ) : null}
        {currentJoke?.setup || currentJoke.delivery ? <TouchableOpacity
          style={styles.likeButton}
          onPress={onPress}
        >
          <View style={[
            styles.likeButtonContainer,
            isLiked && styles.likeButtonContainerActive
          ]}>
            {isLiked ? <FavFilledIcon /> : <FavOutlinedIcon />}
          </View>
        </TouchableOpacity> : null}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  jokeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
