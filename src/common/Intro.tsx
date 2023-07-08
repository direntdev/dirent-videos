import {AnimatedLogo} from './AnimatedLogo';
import {VideoTitle} from './VideoTitle';

export const Intro = (props: {title: string}) => {
	return (
		<div className="gap-[100px] w-full h-full flex flex-col justify-center items-center">
			<AnimatedLogo />
			<VideoTitle title={props.title} />
		</div>
	);
};
