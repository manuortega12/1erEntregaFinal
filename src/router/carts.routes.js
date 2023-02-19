import { Router } from "express";
import CartManager from "../controllers/CartManager.js";

const CartRouter = Router()
const carts = new CartManager

CartRouter.post("/", async (req, res) => {
    res.send(await carts.addCarts())
})

CartRouter.get('/', async (req, res) => {
    res.send(await carts.readProducts())
})

CartRouter.get('/:id', async (req, res) => {
    res.send(await carts.getCartsById(req.params.id))
})


CartRouter.post('/:cid/products/:pid')


export default CartRouter