import { FavFilledIcon, FavOutlinedIcon } from "@assets";
import { Joke } from "@types";
import { COLORS, HISTORY_ICON_DIMENSIONS } from "@utils";
import { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface JokeCardProps {
  joke: Joke,
  isLiked: boolean,
  onToggleLike: (id: number) => void
}

const JokeCard: FC<JokeCardProps> = ({ joke, isLiked, onToggleLike }) => (
  <View style={styles.jokeCard}>
    <View style={styles.jokeContent}>
      <Text style={styles.jokeText}>
        {joke.setup || joke.joke}
        {joke.delivery ? '\n\n' + joke.delivery : ''}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => onToggleLike(joke.id)}
      style={[styles.likeButton, isLiked && styles.likeButtonActive]}
    >
      {isLiked ? (
        <FavFilledIcon {...HISTORY_ICON_DIMENSIONS} />
      ) : (
        <FavOutlinedIcon {...HISTORY_ICON_DIMENSIONS} />
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  jokeCard: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    padding: 24,
  },
  jokeContent: {
    flex: 1,
    paddingRight: 16,
  },
  jokeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    lineHeight: 26,
  },
  likeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.purpleish,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonActive: {
    backgroundColor: COLORS.purple,
  },
});

export { JokeCard };