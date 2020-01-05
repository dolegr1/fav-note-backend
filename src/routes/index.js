import userAuth from '../middlewears/userAuth';

const express = require('express');
const { note, user } = require('../controllers');

const router = express.Router();

router.post('/user/login', user.userLogin);
router.post('/user/logout', user.userLogout);
router.post('/user/register', user.userRegister);

router.get('/notes', userAuth, note.getAllNotes);
router.get('/notes/type', userAuth, note.getAllNotesOfOneType);

router.post('/note', userAuth, note.addNote);
router.get('/note/:id', userAuth, note.getSingleNote);
router.put('/note/:id', userAuth, note.updateNote);
router.delete('/note/:id', userAuth, note.deleteNote);

module.exports = router;
