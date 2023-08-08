import {type FC} from 'react';

type Props = {
	readonly title?: string;
};

export const StuffComponent: FC<Props> = props => (
	<div>
		<h1>{props.title}</h1>
		Component
	</div>
);
