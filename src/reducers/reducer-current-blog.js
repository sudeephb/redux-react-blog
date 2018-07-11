export default function(state = null, action){
	switch(action.type){
		case 'BLOG_SELECTED':
			return action.payload
		default:
			return state
	}
}