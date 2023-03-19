const product = require('./product.router.js')
const order = require('./order.router.js')

// const importImg = require('./import.router.js')

function router(app) {
    app.use(product);
    app.use(order);


}
module.exports  = router