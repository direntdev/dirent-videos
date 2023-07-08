import {interpolate} from 'remotion';
import {Img, Easing} from 'remotion';
import {Sequence, useCurrentFrame, staticFile} from 'remotion';
import {useVideoConfig} from 'remotion';

export const AnimatedLogo = () => {
	const video = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleX = interpolate(frame, [30, 60], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});
	const logoSize = 400;

	const leftLogoTranslateX = interpolate(
		frame,
		[30, 60],
		[-logoSize, (video.width - logoSize) / 2],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.elastic(1),
		}
	);
	const rightLogoTranslateX = interpolate(
		frame,
		[30, 60],
		[video.width, (video.width - logoSize) / 2],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.elastic(1),
		}
	);
	const leftLogoRotate = interpolate(frame, [60, 90], [0, 180], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});

	return (
		<div
			style={{height: logoSize}}
			className="relative w-full flex justify-center items-center"
		>
			<Sequence from={30} durationInFrames={30}>
				<Img
					style={{transform: `translateX(${leftLogoTranslateX}px)`}}
					className="absolute"
					width={400}
					src={staticFile('logo-left.svg')}
				/>
				<Img
					style={{transform: `translateX(${rightLogoTranslateX}px)`}}
					className="absolute"
					width={400}
					src={staticFile('logo-right.svg')}
				/>
			</Sequence>
			<Sequence from={60} durationInFrames={30}>
				<Img
					style={{
						transform: `translateX(${leftLogoTranslateX}px) rotateZ(${leftLogoRotate}deg) `,
					}}
					className="absolute"
					width={400}
					src={staticFile('logo-left.svg')}
				/>
				<Img
					style={{
						transform: `translateX(${leftLogoTranslateX}px) rotateZ(${leftLogoRotate}deg) `,
					}}
					className="absolute"
					width={400}
					src={staticFile('logo-right.svg')}
				/>
			</Sequence>
			<Sequence durationInFrames={30}>
				<Img
					style={{transform: `translateX(${leftLogoTranslateX}px)`}}
					className="absolute"
					width={400}
					src={staticFile('logo-left.svg')}
				/>
				<Img
					style={{transform: `translateX(${rightLogoTranslateX}px)`}}
					className="absolute"
					width={400}
					src={staticFile('logo-right.svg')}
				/>
			</Sequence>
			<div
				style={{opacity: scaleX, fontSize: 200, transform: `scaleX(${scaleX})`}}
				className="relative text-white font-bold leading-relaxed font-mono"
			>
				DIRENT
			</div>
		</div>
	);
};
