const config = {
  environment: import.meta.env.VITE_ENVIRONMENT,
  baseUrl: import.meta.env.VITE_BASE_URL,
  shopifyApiKey: import.meta.env.VITE_SHOPIFY_API_KEY,
  shopifyApiSecret: import.meta.env.VITE_SHOPIFY_API_SECRET,
  apiPrefix: import.meta.env.VITE_API_PREFIX,
  testModeEnable: import.meta.env.VITE_TEST_MODE_ENABLE,
  host: import.meta.env.VITE_SHOPIFY_HOST,
  testToken: import.meta.env.VITE_TEST_TOKEN,
};

export default config;
