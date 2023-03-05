const product = require('./product.router.js')
function router(app) {
    app.use(product);
}
module.exports  = router