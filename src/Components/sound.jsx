import React from 'react';
import Sound from 'react-sound';
export default class UDSound extends React.Component {

  // state is for keeping control state before or after changes.
  state = {

    // the things you want to put in state.
    // text: this.props.text //un comment the line to use state insted props
    controlled: false,
    currentSong: this.props.url,
    position: this.props.position,
    playFromPosition: this.props.playFromPosition,
    volume: this.props.volume,
    playbackRate: this.props.playbackRate,
    loop: this.props.loop,
    playStatus: this.props.playStatus,
    autoLoad: this.props.autoLoad
  }

  onError(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnError != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnError",
        eventName: 'OnError',
        eventData: e
      });
    }
  }
  onLoading(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnLoading != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnLoading",
        eventName: 'OnLoading',
        eventData: e
      });
    }
  }
  onLoad(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnLoad != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnLoad",
        eventName: 'OnLoad',
        eventData: e
      });
    }
  }
  onPlaying(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnPlaying != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnPlaying",
        eventName: 'OnPlaying',
        eventData: e
      });
    }
  }
  onPause(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnPause != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnPause",
        eventName: 'OnPause',
        eventData: e
      });
    }
  }
  onResume(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnResume != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnResume",
        eventName: 'OnResume',
        eventData: e
      });
    }
  }
  onStop(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnStop != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnStop",
        eventName: 'OnStop',
        eventData: e
      });
    }
  }
  onFinishedPlaying(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnFinishedPlaying != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnFinishedPlaying",
        eventName: 'OnFinishedPlaying',
        eventData: e
      });
    }
  }
  onBufferChange(e) {
    this.setState({ value: e, date: e })
    if (this.props.activeOnBufferChange != 'false') {
      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + "OnBufferChange",
        eventName: 'OnBufferChange',
        eventData: e
      });
    }
  }

  render() {
    const { volume, playbackRate, loop } = this.state;
    // These props are returned from PowerShell!
    return (
      <div>
        <Sound
          url={this.state.currentSong}
          playFromPosition={this.state.playFromPosition}
          playStatus={Sound.status.PLAYING}
          volume={volume}
          playbackRate={playbackRate}
          loop={loop}
          onError={this.onError.bind(this)}
          onLoading={this.onLoading.bind(this)}
          onLoad={this.onLoad.bind(this)}
          onPlaying={this.onPlaying.bind(this)}
          onPause={this.onPause.bind(this)}
          onResume={this.onResume.bind(this)}
          onStop={this.onStop.bind(this)}
          onFinishedPlaying={this.onFinishedPlaying.bind(this)}
          onBufferChange={this.onBufferChange.bind(this)}
        >

        </Sound>
      </div>
    );
  }
}
