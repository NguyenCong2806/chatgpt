import express from 'express'
import ChatgptControllers from '~/controllers/ChatgptControllers'

var router = express.Router()
router.get('/',ChatgptControllers.gettext );
router.post('/',ChatgptControllers.posttext );
export default router
