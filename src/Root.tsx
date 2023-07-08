import './style.css';
import {Composition} from 'remotion';
import {QuickTipsDragAndDrop} from './quick-tips/DragAndDrop';
import {QuickTipsTest} from './quick-tips/QuickTipsIntro';

const format = {
	fps: 30,
	width: 1920,
	height: 1080,
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				{...format}
				id="QuickTips-Test"
				component={QuickTipsTest}
				durationInFrames={90}
				defaultProps={{
					title: 'Some test title here',
				}}
			/>
			<Composition
				{...format}
				id="QuickTips-DragAndDrop"
				component={QuickTipsDragAndDrop}
				durationInFrames={90}
				defaultProps={{
					title: 'Drag and drop',
				}}
			/>
		</>
	);
};
