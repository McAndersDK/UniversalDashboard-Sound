import React from 'react';
import Sound from 'react-sound';

export default class UDSound extends React.Component {

  // state is for keeping control state before or after changes.
  state = {

    // the things you want to put in state.
    // text: this.props.text //un comment the line to use state insted props
  }


  render() {

    // These props are returned from PowerShell!
    return (
      <Sound
        url="{this.props.SoundURL}"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );

    // return <h1 id={this.props.id}>{this.props.text}</h1>

  }
}
