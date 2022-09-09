//const config = useRuntimeConfig();
module.exports = {
    client: {
        service: {
            name: 'apollo1',
            url: 'http://localhost:1337/graphql'
        },
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}