import express from 'express';
import account_controler from '../CONTROLLERS/userAcc_Controler';
import {verifyToken} from '../JWT/jwt_conf';

const router= express.Router();

//User accounts routes
router.post('/api/v1/auth/signup',account_controler.createUseraccount); //Endpoint to create user account
router.post('/api/v1/auth/signin',account_controler.userLogin); //Endpoint to login a user
router.patch('/api/v1/user/:userId',verifyToken, account_controler.ChangeUserToMentor); //Endpoint to change user to mentor
router.get('/api/v1/mentors',verifyToken, account_controler.viewAllMentors); //Endpoint to view all registered mentors
export default router;
