import React, { memo } from 'react';
import { SafeAreaView, Text } from 'react-native';

const Movie = () => {
  return (
    <SafeAreaView>
      <Text>Movie</Text>
    </SafeAreaView>
  );
};

export default memo(Movie);
