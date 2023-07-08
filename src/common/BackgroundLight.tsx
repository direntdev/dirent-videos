import {useVideoConfig} from 'remotion';
import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';

export const BackgroundLight = (props: {className: string}) => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();
	const entrance = spring({
		frame,
		fps,
		config: {
			stiffness: 100,
		},
		durationInFrames: 90,
	});

	console.log('entrance', entrance);

	const entranceOffset = interpolate(entrance, [0, 1], [0, 100]);
	// Const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
	return (
		<div
			style={{
				transform: `translateY(${entranceOffset}px) translateX(${entranceOffset}px)`,
			}}
			className={`absolute rounded-full blur-3xl ${props.className}`}
		/>
	);
};
