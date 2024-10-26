import { FC } from "react";
import { FavFilledIcon, FavOutlinedIcon } from "@assets";
import { Joke } from "@types";
import { HISTORY_ICON_DIMENSIONS } from "@utils";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './style';

interface JokeCardProps {
  joke: Joke,
  isLiked: boolean,
  onToggleLike: (id: number) => void
}

export const HistoryJokeCard: FC<JokeCardProps> = ({ joke, isLiked, onToggleLike }) => (
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
