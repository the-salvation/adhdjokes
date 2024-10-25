import { fetchJoke, useAppDispatch } from "@store";
import { COLORS } from "@utils";
import React, { useState, useCallback, FC, ReactNode } from "react";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";

interface RefreshableWrapperProps {
  children: ReactNode;
}

const RefreshableWrapper: FC<RefreshableWrapperProps> = ({ children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    dispatch(fetchJoke());

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [fetchJoke]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLORS.purple}
          colors={[COLORS.purple]}
          progressBackgroundColor={COLORS.white}
          progressViewOffset={40}
          title="Pull to refresh"
          titleColor={COLORS.purple}
        />
      }
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export { RefreshableWrapper };
