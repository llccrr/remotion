export const validCodecs = [
	'h264',
	'h265',
	'vp8',
	'vp9',
	'mp3',
	'aac',
	'wav',
	'prores',
	'h264-mkv',
	'gif',
] as const;

export type Codec = (typeof validCodecs)[number];
export type CodecOrUndefined = Codec | undefined;

export const DEFAULT_CODEC: Codec = 'h264';
