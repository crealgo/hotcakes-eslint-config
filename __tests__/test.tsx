import {type FC} from 'react';

type P = {
	readonly title?: string;
};

export const Component: FC<P> = props => (
	<div>
		<h1>{props.title}</h1>
		Component
	</div>
);
