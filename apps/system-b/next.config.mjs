/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: [
    "@bizflow/ui-components", "@bizflow/utils",
    "@bizflow/feature-auth", "@bizflow/feature-profile", "@bizflow/feature-orders",
    "@bizflow/feature-inventory", "@bizflow/feature-payments", "@bizflow/feature-notifications",
    "@bizflow/feature-analytics", "@bizflow/feature-support", "@bizflow/feature-admin",
    "@bizflow/feature-reporting",
  ],
};
export default config;
