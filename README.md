# Diego Küster — Portfolio

Personal portfolio website presenting five public technical projects with case studies, screenshots, repository links and available demos.

**Live website:** [diegokusterr.github.io/diego-portfolio](https://diegokusterr.github.io/diego-portfolio/)

## Stack

React 18 and Vite 5, with JavaScript and CSS. Project content is maintained in `src/data/projects.js`.

## Local development

Use Node.js 20 and npm to match the GitHub Actions workflow. From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and preview the production output:

```sh
npm run build
npm run preview
```

The build writes to `dist/`. Vite uses `/diego-portfolio/` as the base path for GitHub Pages.

## Deployment

The [Deploy Portfolio workflow](.github/workflows/deploy-portfolio.yml) installs dependencies with `npm ci`, builds the website and deploys `dist/` to GitHub Pages on pushes to `main`. It also supports manual runs. Website changes are reviewed in a pull request before merging into `main`.

## Project repositories

- [Financial Scoring ML System](https://github.com/DiegoKusterr/financial-scoring-ml-system)
- [Financial Lakehouse Analytics Pipeline](https://github.com/DiegoKusterr/financial-lakehouse-analytics-pipeline)
- [Cultural Facilities Data Quality Backend](https://github.com/DiegoKusterr/cultural-facilities-data-quality-backend)
- [Portfolio Analytics Demo](https://github.com/DiegoKusterr/portfolio-analytics-demo)
- [AI German Tutor System](https://github.com/DiegoKusterr/ai-german-tutor-system) — [local setup instructions](https://github.com/DiegoKusterr/ai-german-tutor-system/blob/main/README.md)
