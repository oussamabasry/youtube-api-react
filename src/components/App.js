import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';




class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    OnTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
        this.setState({ selectedVideo: null })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <h1 style={{marginTop: '20px', color:'red'}}>Youtube Api</h1>
                <SearchBar onFormSubmit={this.OnTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>

        );
    }
};


export default App;