import React, { Component } from 'react';
import './App.css';
import { Photo } from '../../../src/modules/photos/photo.entity';
import { PhotosGrid } from './components/photosGrid';

type AppState = { photos: Photo[] };
class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/photos')
      .then((res) => {
        return res.json() as Promise<Photo[]>;
      })
      .then((photos) => this.setState({ photos }));
  }
  render(): React.ReactNode {
    return (
      <>
        <PhotosGrid photos={this.state.photos}></PhotosGrid>
      </>
    );
  }
}

export default App;
