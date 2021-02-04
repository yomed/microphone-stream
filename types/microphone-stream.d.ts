export = MicrophoneStream;
/**
 * Turns a MediaStream object (from getUserMedia) into a Node.js Readable stream and optionally converts the audio to Buffers
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
 *
 * @param {Object} [opts] options
 * @param {MediaStream} [opts.stream] https://developer.mozilla.org/en-US/docs/Web/API/MediaStream - for iOS compatibility, it is recommended that you create the MicrophoneStream instance in response to the tap - before you have a MediaStream, and then later call setStream() with the MediaStream.
 * @param {Boolean} [opts.objectMode=false] Puts the stream into ObjectMode where it emits AudioBuffers instead of Buffers - see https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer
 * @param {Number|null} [opts.bufferSize=null] https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
 * @param {AudioContext} [opts.context] - AudioContext - will be automatically created if not passed in
 * @constructor
 */
declare function MicrophoneStream(opts?: {
    stream: MediaStream;
    objectMode: boolean;
    bufferSize: number | null;
    context: AudioContext;
}, ...args: any[]): void;
declare class MicrophoneStream {
    /**
     * Turns a MediaStream object (from getUserMedia) into a Node.js Readable stream and optionally converts the audio to Buffers
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
     *
     * @param {Object} [opts] options
     * @param {MediaStream} [opts.stream] https://developer.mozilla.org/en-US/docs/Web/API/MediaStream - for iOS compatibility, it is recommended that you create the MicrophoneStream instance in response to the tap - before you have a MediaStream, and then later call setStream() with the MediaStream.
     * @param {Boolean} [opts.objectMode=false] Puts the stream into ObjectMode where it emits AudioBuffers instead of Buffers - see https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer
     * @param {Number|null} [opts.bufferSize=null] https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
     * @param {AudioContext} [opts.context] - AudioContext - will be automatically created if not passed in
     * @constructor
     */
    constructor(opts?: {
        stream: MediaStream;
        objectMode: boolean;
        bufferSize: number | null;
        context: AudioContext;
    }, ...args: any[]);
    context: any;
    /**
     * Set the MediaStream
     *
     * This was separated from the constructor to enable better compatibility with Safari on iOS 11.
     *
     * Typically the stream is only available asynchronously, but the context must be created or resumed directly in
     * response to a user's tap on iOS.
     *
     * @param {MediaStream} stream https://developer.mozilla.org/en-US/docs/Web/API/MediaStream
     * @type {function(MediaStream): void}
     */
    setStream: (arg0: MediaStream) => void;
    pauseRecording: () => void;
    playRecording: () => void;
    stop: () => void;
    _read(): void;
}
declare namespace MicrophoneStream {
    function toRaw(chunk: any): Float32Array;
}
