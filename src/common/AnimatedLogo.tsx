import {interpolate} from 'remotion';
import {Img, Easing} from 'remotion';
import {Sequence, useCurrentFrame, staticFile} from 'remotion';
import {useVideoConfig} from 'remotion';

export const AnimatedLogo = () => {
	const video = useVideoConfig();
	const frame = useCurrentFrame();

	const zoomIn = interpolate(frame, [0, 30], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.elastic(1),
	});
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
			<Sequence from={90} durationInFrames={30}>
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
			<div
				style={{
					opacity: scaleX,
					fontSize: 200,
					transform: frame < 30 ? `scale(${zoomIn})` : `scaleX(${scaleX})`,
				}}
				className="relative text-white font-bold font-mono  bg-blue-500 flex justify-center items-center"
			>
				<span
					style={{
						textShadow: '10px 10px 4px rgba(0, 220, 220, 1)',
					}}
					className="absolute blur-3xl"
				>
					DIRENT
				</span>
				<span className="absolute">DIRENT</span>
			</div>
		</div>
	);
};
