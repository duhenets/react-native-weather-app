const { compilerOptions } = require('./tsconfig.json');

const tsconfigPathsToAlias = (paths) => (
    Object.entries(paths).reduce((aliases, [key, value]) => {
        const alias = key.replace('/*', '');
        const path = value[0].replace('/*', '');

        return { ...aliases, [alias]: path };
    }, {})
);

module.exports = (api) => {
    api.cache(true);

    const plugins = [
        [
            'module-resolver',
            {
                root: [compilerOptions.baseUrl],
                alias: tsconfigPathsToAlias(compilerOptions.paths),
            },
        ],
    ];

    return {
        presets: ['babel-preset-expo'],
        plugins,
    };
};
