import React, { Component } from 'react';
import { Photo } from '../../../src/modules/photos/photo.entity';
import { PhotosGrid } from './components/PhotosGrid';

type AppState = {
  photos: Photo[];
  searchInput: string;
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      searchInput: '',
    };
    this.searchByTags = this.searchByTags.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }
  updateInput(e: any) {
    this.setState({ searchInput: e.target.value });
  }
  searchByTags() {
    this.getPhotos(this.state.searchInput);
    this.setState({ searchInput: '' });
  }

  getPhotos(tags = '') {
    fetch(`http://localhost:1204/photos/${tags}`)
      .then((res) => {
        return res.json() as Promise<Photo[]>;
      })
      .then((photos) => this.setState({ photos }));
  }
  render(): React.ReactNode {
    return (
      <div>
        <input type="text" onChange={this.updateInput} />
        <button onClick={this.searchByTags}> refresh</button>
        <PhotosGrid photos={this.state.photos}></PhotosGrid>
      </div>
    );
  }
}

export default App;
