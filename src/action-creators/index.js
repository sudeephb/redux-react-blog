import axios from 'axios'

export function selectBlog(blog){
	return{
		type: 'BLOG_SELECTED',
		payload: blog
	}
}

export function getBlogs(url){
 	const blogs =  axios.get(url)
	return{
		type: 'GET_BLOGS',
		payload: blogs
	}
}

export function createBlog(title, body){
	axios.post('http://localhost:8000/blogs', {
			title: title,
			body: body
		})
	return{
		type: 'BLOG_SELECTED',
		payload: {
			title: title,
			body: body
		}
	}
}

export function getComments(url, blogId){
	let comments = axios.get(url)
	let res = []
	if(comments.blogId === blogId){
		res = comments
	}
	return{
		type: 'GET_COMMENTS',
		payload: comments
	}
}

export function deleteBlog(url,blog){
	axios.delete(`${url}/${blog.id}`)
	return{
		type: 'DELETE_BLOG',
		payload: 'Deleting blog'
	}
}
