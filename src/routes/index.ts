import compose from 'koa-compose'
import bestBuyRouter from './bestBuy'

export default compose([bestBuyRouter.middleware()])
