import React, { memo } from 'react';
import styled from '@emotion/native';

import Poster from './Poster';

const Container = styled.View({
  flex: 1,
});

const NowPlaying = () => {
  return (
    <Container>
      <Poster />
    </Container>
  );
};

export default memo(NowPlaying);
