module.exports = ({ env }) => ({
    // ...
    seo: {
        enabled: true
    },
    navigation: {
        enabled: true,
        config: {
            additionalFields: ['audience'],
            contentTypes: ['api::page.page'],
            contentTypesNameFields: {
                'api::page.page': ['title']
            },
            allowedLevels: 2,
        }
    }
});