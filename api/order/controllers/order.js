'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /*async create(ctx) {
        const { articulos, address, addressShipping } = ctx.request.body;
        let totalPayment = 0;
        articulos.forEach(articulo => {
            totalPayment = totalPayment + articulo.price;
        });

        const createOrder =  [];
        for await (const articulo of articulos) {
            const data = {
                product: articulo.id,
                user: address._id,
                //totalPayment,
                addressShipping,
            };
            const validData = await strapi.entityValidator.validateEntity(
                strapi.models.order,
                data
            );
            const entry = await strapi.query("order").create(validData);
            createOrder.push(entry);
        }
        return createOrder;
    },*/
};
