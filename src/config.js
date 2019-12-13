import Store from 'conf-store';
import camelcase from 'camelcase-keys';
import tailwindConfig from '../tailwind.config';

const env = process.env.NODE_ENV || 'development';

const store = new Store({
    env,

    apollo: {
        http: {
            uri: process.env.GRAPHQL_URI,
        },
    },

    // Expose TailwindCSS config values
    tailwind: camelcase(tailwindConfig, { deep: true }),
});

export default (key, criteria = {}) => store.get(key, { env, ...criteria });
