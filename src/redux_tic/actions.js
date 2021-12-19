export const PLAY_POSITION = 'PLAY_POSITION';
export function playPosition(x, y, turn, values){
	return{
		type: 'PLAY_POSITION',
		x: x,
		y: y,
		turn: turn,
		values: values
		};
		}

export function reset() {
	return { type: 'RESET' };
}
