import Koa, { Context, Next } from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'
import bestBuyRouter from './routes/bestBuy'
dotenv.config()

const server: Koa = new Koa()
const port = process.env.PORT ?? 8080
server.use(bodyParser())
server.use(cors())

server.use(bestBuyRouter.routes())

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})
