import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';
let assetPrefix = '';

// Configuração para GitHub Pages se estiver sendo executado em GitHub Actions
if (isGithubActions) {
  // Extrair o nome do repositório do GitHub repository no formato {owner}/{repo}
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'focolwebsite';
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: 'export', // Configuração para exportação estática
  basePath, // Configuração de basePath para GitHub Pages
  assetPrefix, // Configuração de assetPrefix para GitHub Pages
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  /* outras configurações aqui */
};

export default nextConfig;
