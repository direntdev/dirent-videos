import {AbsoluteFill} from 'remotion';
import {Intro} from '../common/Intro';
import {FloatingBackground} from '../common/FloatingBackground';

export const QuickTipsDragAndDrop = (props: {title: string}) => {
	return (
		<AbsoluteFill className="items-center justify-center">
			<FloatingBackground />
			<Intro title={props.title} />
		</AbsoluteFill>
	);
};
