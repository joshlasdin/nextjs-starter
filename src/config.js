import Store from 'conf-store';
import camelcase from 'camelcase-keys';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

const env = process.env.NODE_ENV || 'development';

const store = new Store({
  env,

  apollo: {
    http: {
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || process.env.GRAPHQL_URI,
      credentials: 'same-origin',
    },
  },

  // Expose TailwindCSS config values
  tailwind: camelcase(resolveConfig(tailwindConfig).theme, { deep: true }),
});

const getConfig = (key, criteria = {}) => store.get(key, { env, ...criteria });
export default getConfig;
