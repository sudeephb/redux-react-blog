export function selectBlog(blog){
	return{
		type: 'BLOG_SELECTED',
		payload: blog
	}
}