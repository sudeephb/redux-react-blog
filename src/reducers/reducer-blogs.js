export default function(state = null, action) {
	switch(action.type){
		case 'GET_BLOGS':
			return action.payload
		default:
			return state
	}
}