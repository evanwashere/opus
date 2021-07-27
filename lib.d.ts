type signal = 'auto' | 'voice' | 'music';
type sample_rate = 8000 | 12000 | 16000 | 24000 | 48000;
type application = 'voip' | 'audio' | 'restricted_lowdelay';
type complexity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type expert_frame_duration = 5 | 10 | 20 | 40 | 60 | 80 | 2.5 | 100 | 120 | 'arg';
type bandwidth = 'auto' | 'wideband' | 'fullband' | 'narrowband' | 'mediumband' | 'superwideband';

declare module '@evan/opus' {
  export class Decoder {
    constructor(options?: {
      channels?: 1 | 2,
      sample_rate?: sample_rate,
    });

    channels: 1 | 2;
    ctl(cmd: number, value?: number): number;
    decode(buf: ArrayBufferView): Uint8Array;

    // https://www.opus-codec.org/docs/opus_api-1.3.1/group__opus__decoderctls.html
    get gain(): number;
    set gain(int: number);
    get pitch(): null | number;
    get last_packet_duration(): number;

    // https://www.opus-codec.org/docs/opus_api-1.3.1/group__opus__genericctls.html
    reset(): void;
    get in_dtx(): boolean;
    get bandwidth(): bandwidth;
    get sample_rate(): sample_rate;
    get phase_inversion_disabled(): boolean;
    set phase_inversion_disabled(bool: boolean);
  }

  export class Encoder {
    constructor(options?: {
      channels?: 1 | 2,
      sample_rate?: sample_rate,
      application?: application,
    });

    channels: 1 | 2;
    ctl(cmd: number, value?: number): number;
    encode(buf: ArrayBufferView): Uint8Array;
    encode_pcm_stream(frame_size: number, iter: Iterable<ArrayBufferView> | AsyncIterable<ArrayBufferView>): AsyncIterable<Uint8Array>;

    // https://www.opus-codec.org/docs/opus_api-1.3.1/group__opus__genericctls.html
    reset(): void;
    get in_dtx(): boolean;
    get bandwidth(): bandwidth;
    get sample_rate(): sample_rate;
    get phase_inversion_disabled(): boolean;
    set phase_inversion_disabled(bool: boolean);

    // https://www.opus-codec.org/docs/opus_api-1.3.1/group__opus__encoderctls.html
    get vbr(): boolean;
    get dtx(): boolean;
    get signal(): signal;
    get bitrate(): number;
    get lookhead(): number;
    get lsb_depth(): number;
    get inband_fec(): boolean;
    get packet_loss(): number;
    get complexity(): complexity;
    get vbr_constraint(): boolean;
    get application(): application;
    get max_bandwidth(): bandwidth;
    get prediction_disabled(): boolean;
    get force_channels(): 1 | 2 | 'auto';
    get expert_frame_duration(): expert_frame_duration;

    set vbr(bool: boolean);
    set dtx(bool: boolean);
    set signal(arg: signal);
    set lsb_depth(int: number);
    set packet_loss(int: number);
    set inband_fec(bool: boolean);
    set bandwidth(arg: bandwidth);
    set complexity(int: complexity);
    set vbr_constraint(bool: boolean);
    set application(arg: application);
    set max_bandwidth(arg: bandwidth);
    set prediction_disabled(bool: boolean);
    set force_channels(arg: 1 | 2 | 'auto');
    set bitrate(arg: 'max' | 'auto' | number);
    set expert_frame_duration(arg: expert_frame_duration);
  }
}