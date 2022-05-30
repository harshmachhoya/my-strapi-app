'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    // Method 3: Replacing a core action
    async findOneBySlug(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::post.post').findOne({
            where: { slug: slug }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
