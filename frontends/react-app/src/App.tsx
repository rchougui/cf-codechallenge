import React, { Component } from 'react';
import { Photo } from '../../../src/modules/photos/photo.entity';
import { PhotosGrid } from './components/PhotosGrid';
import './App.css';
import { SearchBox } from './components/SearchBox';
type AppState = {
  photos: Photo[];
  isLoading: boolean;
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      isLoading: false,
    };
    this.searchByTags = this.searchByTags.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  searchByTags(tags: string) {
    this.getPhotos(tags);
  }

  getPhotos(tags = '') {
    this.setState({ isLoading: true });
    fetch(`http://localhost:1204/photos/${tags}`)
      .then((res) => res.json() as Promise<Photo[]>)
      .then((photos) => {
        this.setState({ isLoading: false, photos });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  }
  render(): React.ReactNode {
    const loader = this.state.isLoading ? <div className="loader">Loading...</div> : '';
    return (
      <>
        <SearchBox searchCallback={this.searchByTags} />
        {loader}
        <PhotosGrid photos={this.state.photos} />
      </>
    );
  }
}

export default App;
