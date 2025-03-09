
































const express = require('express')
const {getUserProfileById} = require ('../controllers/userProfilesControllers')
const userProfilesRouter = express.Router()



userProfilesRouter.get('/:userId',getUserProfileById)

module.exports = userProfilesRouter