const product = require('./product.router.js')
const order = require('./order.router.js')
const login = require('./login.router')


// const importImg = require('./import.router.js')

function router(app) {
    app.use(product);
    app.use(order);
    app.use(login);


}
module.exports  = router