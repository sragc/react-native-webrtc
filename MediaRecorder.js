/**
 * Created by jeff.morgan on 6/9/17.
 */

'use strict';

import {NativeModules} from 'react-native';
import EventTarget from 'event-target-shim';


const {WebRTCModule} = NativeModules;

const MEDIA_RECORDER_EVENTS = []


export default class MediaRecorder extends EventTarget(MEDIA_RECORDER_EVENTS) {

  constructor() {
    super();
    WebRTCModule.mediaRecorderInit();
  }

}