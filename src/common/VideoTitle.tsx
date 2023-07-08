import {interpolate, useCurrentFrame} from 'remotion';

export const VideoTitle = (props: {title: string}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 45], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			className="relative text-white font-bold text-center"
			style={{fontSize: 150, opacity}}
		>
			{props.title}
		</div>
	);
};
