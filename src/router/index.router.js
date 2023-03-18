const product = require('./product.router.js')
// const importImg = require('./import.router.js')

function router(app) {
    app.use(product);
    // app.use(importImg);

}
module.exports  = router