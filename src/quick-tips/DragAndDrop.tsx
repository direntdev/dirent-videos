import {useCurrentFrame} from 'remotion';
import {Easing} from 'remotion';
import {interpolate} from 'remotion';
import {staticFile} from 'remotion';
import {Img} from 'remotion';
import {AbsoluteFill, Sequence} from 'remotion';
import {Intro} from '../common/Intro';
import {FloatingBackground} from '../common/FloatingBackground';

export const QuickTipsDragAndDrop = (props: {title: string}) => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [90, 120], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});
	return (
		<AbsoluteFill className="items-center justify-center">
			<FloatingBackground />
			<Sequence style={{opacity: fade}} durationInFrames={120}>
				<Intro title={props.title} />
			</Sequence>
			<Sequence
				style={{opacity: 1 - fade}}
				className="flex items-center justify-center"
				from={60}
			>
				<Img
					className="bg-blue-200 absolute"
					width={1200}
					src={staticFile('shot1.png')}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
