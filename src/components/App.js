import React from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import SongList from './songList'
import SongDetail from './songDetail'

function App() {
  return (
    <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <SongList/>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <SongDetail/>
      </Segment>
    </Grid.Column>
  </Grid>
  );
}

export default App;
