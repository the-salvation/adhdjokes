// import { useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useAppDispatch, useAppSelector } from '../../store/store';
// import { fetchJoke, toggleLike } from '@store/slices/jokesSlice';
// import { FavFilledIcon, FavOutlinedIcon } from '@assets';

// const TodayScreen = () => {
//   const dispatch = useAppDispatch();
//   const { currentJoke, likedJokes } = useAppSelector((state) => state.jokes);

//   useEffect(() => {
//     dispatch(fetchJoke());
//   }, [dispatch]);

//   if (!currentJoke) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   const isLiked = likedJokes[currentJoke.id];

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Today</Text>
//       </View>
//       <View style={styles.jokeCard}>
//         <Text style={styles.jokeText}>
//           {currentJoke.setup || currentJoke.joke}
//         </Text>
//         {currentJoke.delivery && (
//           <Text style={styles.deliveryText}>{currentJoke.delivery}</Text>
//         )}
//         <TouchableOpacity
//           style={[styles.likeButton, isLiked && styles.likeButtonActive]}
//           onPress={() => dispatch(toggleLike(currentJoke.id))}
//         >
//           <View style={styles.likeButtonContainer}>
//             <Text style={[styles.likeButtonText, isLiked && styles.likeButtonTextActive]}>
//               {isLiked ? <FavFilledIcon /> : <FavOutlinedIcon />}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#000000',
//   },
//   jokeCard: {
//     margin: 20,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   jokeText: {
//     fontSize: 18,
//     color: '#000000',
//     marginBottom: 10,
//     lineHeight: 24,
//   },
//   deliveryText: {
//     fontSize: 18,
//     color: '#000000',
//     marginTop: 10,
//     lineHeight: 24,
//   },
//   likeButton: {
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   likeButtonContainer: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#F0E6FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   likeButtonActive: {
//     backgroundColor: '#E6E6FF',
//   },
//   likeButtonText: {
//     fontSize: 24,
//     color: '#8866FF',
//   },
//   likeButtonTextActive: {
//     color: '#6644FF',
//   },
// });

// export { TodayScreen };
// TodayScreen.tsx
// TodayScreen.tsx
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchJoke, toggleLike } from '../../store/slices/jokesSlice';
import { FavFilledIcon, FavOutlinedIcon } from '@assets';

const TodayScreen = () => {
  const dispatch = useAppDispatch();
  const { currentJoke, likedJokes } = useAppSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  if (!currentJoke) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const isLiked = likedJokes[currentJoke.id];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today</Text>
      </View>
      <View style={styles.jokeContainer}>
        <View style={styles.jokeCard}>
          <Text style={styles.jokeText}>
            {currentJoke.setup || currentJoke.joke}
          </Text>
          {currentJoke.delivery && (
            <Text style={styles.deliveryText}>{currentJoke.delivery}</Text>
          )}
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => dispatch(toggleLike(currentJoke.id))}
          >
            <View style={[
              styles.likeButtonContainer,
              isLiked && styles.likeButtonContainerActive
            ]}>
              {isLiked ? <FavFilledIcon /> : <FavOutlinedIcon />}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666666',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  jokeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  jokeCard: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  jokeText: {
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
  },
  deliveryText: {
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    marginTop: 20,
  },
  likeButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  likeButtonContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonContainerActive: {
    backgroundColor: '#6644FF',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingVertical: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export { TodayScreen };
