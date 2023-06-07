import { Router } from "express";
import { createOrder, receiveWebhook } from "../controllers/payment.js";

const router = Router();

router.post('/create-order', createOrder)

router.get('/failure', (req, res) => {
  res.send('Order failed')
})

router.get('/pending', (req, res) => {
  res.send('Order pending')
})

router.get('/success', (req, res) => {
  res.send('Order Success')
})

router.post('/webhook', receiveWebhook)


export default router;
