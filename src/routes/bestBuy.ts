import Router from 'koa-router'
import bestBuyController from '../controllers/BestBuy'
const bestBuyRouter: Router = new Router()

bestBuyRouter.get('/best_buy/health_check', bestBuyController.healthCheck)
bestBuyRouter.get('/best_buy/buy_item', bestBuyController.buyItem)

export default bestBuyRouter
