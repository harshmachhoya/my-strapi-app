// 'use strict';

// /**
//  * post router.
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::post.post');

module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/posts/slug/:slug',
            handler: 'post.findOneBySlug',
        }
    ]
}