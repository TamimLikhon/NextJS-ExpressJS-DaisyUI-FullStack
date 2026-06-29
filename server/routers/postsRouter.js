import { Router } from 'express';
import * as postsController from '../controllers/postsController.js';
import { identifier } from '../middlewares/identification.js';

const router = Router();

router.get('/all-posts', postsController.getPosts);
router.get('/single-post', postsController.singlePost);
router.post('/create-post', identifier, postsController.createPost);
router.put('/update-post', identifier, postsController.updatePost);
router.delete('/delete-post', identifier, postsController.deletePost);

export default router;
