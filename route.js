import { Router } from 'express'
const router = Router()

import demo from './route/demo.js'
import authen from './route/authen.js'
import emailsender from './route/emailsender.js'
import ecommerce from './route/ecommerce.js'

router.use('/demo', demo)
router.use('/authen', authen)
router.use('/emailsender', emailsender)
router.use('/ecommerce', ecommerce)

export default router