






















const express = require('express')
const {getUserPosts,getUserPostsById,addUserPost,updateUserPostById,deleteUserPostsById} = require('../controllers/userPostsController')
const userPostsRouter = express.Router()


userPostsRouter.get('/',getUserPosts)

// GET get user post by id /api/userPosts/:post_id

userPostsRouter.get('/:post_id',getUserPostsById)

// POST post a user post /api/userPosts

userPostsRouter.post('/',addUserPost)

// PUT update a user post by id /api/userPosts/:post_id

userPostsRouter.put('/:post_id',updateUserPostById)


// DELETE delete a user post by id /api/userPosts/:post_id

userPostsRouter.delete('/:post_id',deleteUserPostsById)


module.exports = userPostsRouter 

