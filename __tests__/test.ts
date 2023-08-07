import {createElement} from 'react';

type TestType = {
	name: string;
	age: number;
};

export const testFunction = (): TestType => ({
	name: 'test',
	age: 20,
});

export const divElement = createElement('div', {className: 'test'});
