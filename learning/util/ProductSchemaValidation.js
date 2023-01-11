const zod = require('zod');

const productSchemaValidaiton = zod.object({
    body: zod.object({

        name: zod.string().min(3).max(20),
        price: zod.number().positive(),

    }).strict()
})
module.exports = productSchemaValidaiton;