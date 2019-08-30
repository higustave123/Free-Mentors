import express from 'express';
import account_controler from '../CONTROLLERS/userAcc_Controler';

const router= express.Router();

//User accounts routes
router.post('/api/v1/auth/signup',account_controler.createUseraccount); //Endpoint to create user account
router.post('/api/v1/auth/signin',account_controler.userLogin); //Endpoint to login a user
export default router;
