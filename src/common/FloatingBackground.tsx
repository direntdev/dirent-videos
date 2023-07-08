import {BackgroundLight} from './BackgroundLight';

export const FloatingBackground = () => {
	return (
		<div className="bg-skin-dark pointer-events-none absolute inset-0">
			<BackgroundLight className="left-[200px] top-[100px] h-[400px] w-[500px] -rotate-45 bg-skin-accent/20" />
			<BackgroundLight className="left-[900px] top-[750px] h-[200px] w-[500px] -rotate-[20deg] bg-skin-accent/20" />
			<BackgroundLight className="left-[1600px] top-[300px] h-[200px] w-[150px] -rotate-[10deg] bg-skin-accent/30" />
		</div>
	);
};
