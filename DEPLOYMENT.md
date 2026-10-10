# Deployment boundaries

This is a source snapshot of QS cet-6. React/TypeScript, Vinext, Cloudflare Workers and D1 are required. See README.md for study features and scripts.

The original hosted environment injects authenticated identity headers. Deployments elsewhere must implement equivalent trusted authentication; never trust browser-supplied identity headers. Configure D1 bindings and migrations using your own Cloudflare account. DEEPSEEK_CONFIG_SECRET and optional model API credentials must be configured as server secrets, never committed. Account data, local databases, hosting metadata and original credentials are excluded.

Original scaffold/build configuration may reference the original hosting platform. This snapshot is not a claim of turnkey deployment on a different host. ECDICT attribution and its existing license are in public/ecdict-license.txt. No new license is assigned to third-party components.
