export type ok = {}

export interface InavLocation {
	id:number,
	url:string,
	icon?:string,
	label:string
}

export type ArrayOfNavLocation = InavLocation[]

const navLocaton:ArrayOfNavLocation = [
	{
		id:1,
		url:'/',
		label:'Home'

	}
]