export const projects = [
  {
    id: 'financial-scoring-ml-system',
    number: '01',
    title: 'Financial Scoring ML System',
    shortTitle: 'Financial Scoring ML',
    heroLabel: 'Financial ML',
    heroProof: 'Walk-forward validation',
    value:
      'Bachelor\'s thesis-related financial scoring system with regression, classification and historical validation across sequential time windows.',
    built:
      'Built a reproducible Python pipeline to process financial statement data, compare regression and classification models and expose predictions through an interactive Flask dashboard.',
    proofPoints: ['Walk-forward validation', 'Scoring pipeline', 'Flask dashboard'],
    stack: ['Python', 'pandas', 'XGBoost', 'Flask', 'Walk-forward validation'],
    demoNote: 'First launch may take up to 60 seconds while the demo wakes up.',
    links: [
      {
        label: 'Live Scoring Demo',
        url: 'https://prediction-of-fundamental-financial.onrender.com/',
        type: 'demo',
      },
      {
        label: 'View Repository',
        url: 'https://github.com/DiegoKusterr/financial-scoring-ml-system',
        type: 'repository',
      },
    ],
    images: {
      hero: '/assets/projects/financial-scoring/hero.png',
      overview: '/assets/projects/financial-scoring/dashboard-overview.png',
      results: '/assets/projects/financial-scoring/model-results.png',
    },
    diagramSteps: [
      'Raw financial statements',
      'Feature engineering',
      'Walk-forward validation',
      'Model comparison',
      'Flask dashboard',
    ],
    caseStudy: {
      overviewLine: 'Time-aware financial scoring \u00b7 Python / XGBoost / Flask',
      whatItIs: [
        'Original Bachelor\'s thesis-related work on fundamental financial scoring.',
        'Regression and classification workflows with historical, temporally structured validation and review-ready outputs.',
      ],
      problem: [
        'Financial prediction is time-sensitive.',
        'Evaluation quality depends on preventing look-ahead bias.',
      ],
      built: [
        'Reproducible workflow for financial statement processing and feature preparation.',
        'Model comparison plus a Flask interface for reviewing predictions.',
      ],
      proof: [
        'S&P 500 financial statement data.',
        'Time-aware validation.',
        'Dashboard-based score inspection.',
        'Demo available.',
      ],
      technicalDetails: {
        architecture: [
          'Pipeline split into ingestion, feature preparation, training and review.',
          'Evaluation organized through sequential validation windows.',
        ],
        dataInputs: ['S&P 500 financial statement data.', 'Derived factors for score prediction.'],
        logic: [
          'Model comparison across sequential historical validation windows.',
          'Fully leakage-free or strictly point-in-time evaluation has not been established.',
        ],
        outputs: ['Predicted scoring outputs.', 'Review-ready dashboard views.'],
      },
    },
  },
  {
    id: 'financial-lakehouse-analytics-pipeline',
    number: '02',
    title: 'Financial Lakehouse Analytics Pipeline',
    shortTitle: 'Lakehouse Analytics',
    heroLabel: 'Lakehouse Analytics',
    heroProof: 'dbt lineage',
    value:
      'Local financial lakehouse pipeline using PySpark ETL, Parquet storage and dbt-powered DuckDB marts.',
    built:
      'Built a local financial lakehouse using synthetic data, PySpark ETL, Parquet storage and dbt with DuckDB for tested financial transformations, data-quality checks, model lineage and GitHub Actions CI.',
    proofPoints: ['PySpark ETL', 'dbt lineage', 'Analytics marts'],
    stack: ['PySpark', 'dbt', 'DuckDB', 'Parquet', 'Data Quality'],
    links: [
      {
        label: 'dbt Docs & Technical Demo',
        url: 'https://diegokusterr.github.io/financial-lakehouse-analytics-pipeline/dbt-docs/#!/overview',
        type: 'demo',
      },
      {
        label: 'View Repository',
        url: 'https://github.com/DiegoKusterr/financial-lakehouse-analytics-pipeline',
        type: 'repository',
      },
    ],
    gallery: [
      {
        src: '/assets/projects/financial-lakehouse/lakehouse-dbt-docs.png',
        alt: 'dbt model documentation view for the financial lakehouse analytics pipeline',
      },
      {
        src: '/assets/projects/financial-lakehouse/lakehouse-lineage.png',
        alt: 'dbt lineage graph for the financial lakehouse analytics pipeline',
      },
      {
        src: '/assets/projects/financial-lakehouse/lakehouse-validation.png',
        alt: 'validated mart output summary for the financial lakehouse analytics pipeline',
      },
    ],
    diagramSteps: [
      'Synthetic financial data',
      'PySpark silver ETL',
      'Parquet lakehouse storage',
      'dbt DuckDB models',
      'Reporting and ML-ready marts',
    ],
    caseStudy: {
      overviewLine: 'Local financial lakehouse analytics \u00b7 PySpark / dbt / DuckDB',
      whatItIs: [
        'From-scratch local financial lakehouse analytics pipeline built on synthetic data.',
        'Focused on data engineering and analytics engineering fundamentals rather than dashboards or machine learning.',
      ],
      problem: [
        'Reliable analytics depends on clean raw-to-mart data foundations before reporting or modeling.',
        'Local projects often skip tested transformations, lineage visibility and warehouse-style structure.',
      ],
      built: [
        'PySpark workflow for raw-to-silver ETL, cleaning, window functions and native Parquet writing.',
        'dbt with DuckDB for staging, intermediate and mart models with tests, docs and lineage.',
      ],
      proof: [
        'Synthetic financial datasets generated locally.',
        '54 Python tests, 61 dbt tests and 9 models validated in GitHub Actions CI.',
        'Final marts designed for reporting-ready and ML-ready analysis.',
        'No dashboard by design because the focus is the data foundation.',
      ],
      technicalDetails: {
        architecture: [
          'Local lakehouse flow from synthetic raw data to silver Parquet layers and dbt marts.',
          'Model stack separated into staging, intermediate and mart layers for maintainable analytics workflows.',
        ],
        dataInputs: [
          'Synthetic financial datasets generated locally.',
          'Parquet-based silver tables prepared from PySpark ETL.',
        ],
        logic: [
          'Cleaning, window functions and schema-focused ETL in PySpark.',
          'Tested financial transformations in DuckDB, with dbt data-quality checks, output reconciliation and GitHub Actions CI.',
        ],
        outputs: ['Reporting-ready marts.', 'ML-ready analytical tables.'],
      },
    },
  },
  {
    id: 'pitec-data-quality-validation-system',
    number: '03',
    title: 'Cultural Facilities Data Quality Backend',
    shortTitle: 'Data Quality Backend',
    heroLabel: 'Data Quality Backend',
    heroProof: 'Duplicate detection',
    value:
      'Python data-quality backend for validation, normalization, duplicate candidate detection and human review prioritization of cultural facilities records.',
    built:
      'Built a Python backend to validate JSON records, detect duplicate or consolidation candidates, score review priority and generate operational outputs for human-in-the-loop correction.',
    proofPoints: ['Validation rules', 'Entity resolution', 'Review prioritisation'],
    stack: ['Python', 'JSON validation', 'Data Quality', 'Duplicate Detection', 'Django reference API'],
    links: [
      {
        label: 'View Repository',
        url: 'https://github.com/DiegoKusterr/cultural-facilities-data-quality-backend',
        type: 'repository',
      },
    ],
    gallery: [
      {
        src: '/assets/projects/pitec/pitec-data-quality-main.png',
        alt: 'operational review queue output for the cultural facilities data quality backend',
      },
      {
        src: '/assets/projects/pitec/pitec-data-quality-duplicates.png',
        alt: 'duplicate detection summary for the cultural facilities data quality backend',
      },
      {
        src: '/assets/projects/pitec/pitec-data-quality-review.png',
        alt: 'validation rules summary for the cultural facilities data quality backend',
      },
    ],
    diagramSteps: [
      'JSON records',
      'Validation rules',
      'Duplicate detection',
      'Priority scoring',
      'Human review outputs',
    ],
    caseStudy: {
      overviewLine: 'Validation and review prioritisation \u00b7 Python / Django reference API',
      whatItIs: [
        'Backend system for validating heterogeneous cultural asset records.',
        'Designed for interpretable review workflows and operational correction support.',
      ],
      problem: [
        'Heterogeneous records and incomplete fields slow down consistent review.',
        'Duplicate or consolidation candidates increase manual effort.',
      ],
      built: [
        'Validation backend for rule checks, normalization, duplicate candidates and consolidation checks.',
        'Rule-based confidence scoring and review prioritisation for human-in-the-loop correction.',
      ],
      proof: [
        'Operational outputs prepared for review and assisted correction.',
        'Single workflow covering validation, entity resolution and review priority.',
      ],
      technicalDetails: {
        architecture: [
          'Backend service with validation, scoring and review output layers.',
          'Read-only Django reference API for exposing validation results; not a production deployment.',
        ],
        dataInputs: ['Heterogeneous JSON records.', 'Entity data requiring consolidation or reviewer action.'],
        logic: [
          'Field-level validation and normalization rules.',
          'Heuristic confidence and review-priority scores, not empirically calibrated matching probabilities.',
        ],
        outputs: ['Priority-ranked review outputs.', 'Operational correction files for human review.'],
      },
    },
  },
  {
    id: 'investment-portfolio-analytics-system',
    number: '04',
    title: 'Portfolio Analytics App',
    shortTitle: 'Portfolio Analytics',
    heroLabel: 'Portfolio Analytics',
    heroProof: 'REST APIs',
    value:
      'Public FastAPI/SQLite portfolio analytics prototype using synthetic data for holdings, dividends, allocation, returns and risk exposure.',
    built:
      'Built a public analytics prototype with FastAPI services, SQLite persistence, synthetic demo data and dashboard views for portfolio composition, dividends, returns and exposure.',
    proofPoints: ['Portfolio tracking', 'Financial APIs', 'Decision dashboards'],
    stack: ['Python', 'FastAPI', 'SQLite', 'REST APIs', 'Chart.js'],
    demoNote: 'First launch may take up to 60 seconds while the demo wakes up.',
    links: [
      {
        label: 'Live Portfolio Demo',
        url: 'https://portfolio-analytics-demo.onrender.com/',
        type: 'demo',
      },
      {
        label: 'View Repository',
        url: 'https://github.com/DiegoKusterr/portfolio-analytics-demo',
        type: 'repository',
      },
    ],
    gallery: [
      {
        src: '/assets/projects/portfolio-analytics/portfolio-analytics-investments.png',
        alt: 'investments-focused portfolio analytics screen with populated holdings and allocation data',
      },
      {
        src: '/assets/projects/portfolio-analytics/portfolio-analytics-tools.png',
        alt: 'active FIRE calculator workflow in the portfolio analytics app in English',
      },
      {
        src: '/assets/projects/portfolio-analytics/portfolio-analytics-dividends.png',
        alt: 'dividends-focused portfolio analytics screen with income and upcoming payout tracking',
      },
    ],
    diagramSteps: [
      'Synthetic holdings and transactions',
      'FastAPI endpoints',
      'Portfolio metrics',
      'Allocation and risk views',
      'Dashboard',
    ],
    caseStudy: {
      overviewLine: 'Public synthetic-data portfolio analytics prototype \u00b7 FastAPI / SQLite / Chart.js',
      whatItIs: [
        'Public portfolio analytics prototype for monitoring holdings, dividends and exposure.',
        'Uses synthetic portfolio data for demonstration and recurring review workflows.',
      ],
      problem: [
        'Portfolio information is often split across positions, transactions and market data sources.',
      ],
      built: [
        'FastAPI backend with SQLite persistence and portfolio-specific analytics endpoints.',
        'Dashboard views focused on allocation, returns, dividends and exposure monitoring.',
      ],
      proof: [
        'Public dashboard views connected to portfolio analytics services using synthetic data.',
        'Interactive analysis across allocation, performance and risk exposure.',
      ],
      technicalDetails: {
        architecture: [
          'FastAPI backend serving a static frontend with chart-driven portfolio views.',
          'SQLite persistence and integrated data retrieval for current portfolio review.',
        ],
        dataInputs: ['Synthetic positions, transactions and dividend records.', 'Synthetic market data for the public demo.'],
        logic: [
          'Aggregation of composition, performance and exposure metrics.',
          'Prototype calculations and interactive review views; comprehensive independent financial validation has not been established.',
        ],
        outputs: ['Allocation and holdings views.', 'Dividend, return and exposure review panels.'],
      },
    },
  },
  {
    id: 'ai-german-tutor-system',
    number: '05',
    title: 'AI German Tutor System',
    shortTitle: 'AI German Tutor',
    heroLabel: 'AI German Tutor',
    heroProof: 'Browser speech + Ollama',
    value:
      'Desktop-first local German tutor with Ollama / Llama 3.2, streaming conversations, persistent history, learning workflows and Windows browser voice support.',
    built:
      'Built a FastAPI assistant with local Ollama inference, streamed responses, JSON conversation history, SQLite learning data and browser speech recognition and playback.',
    proofPoints: ['Windows browser voice workflow', 'Ollama streaming', 'Persistent history'],
    stack: ['Python', 'FastAPI', 'Ollama', 'Llama 3.2', 'SQLite'],
    links: [
      {
        label: 'View Repository',
        url: 'https://github.com/DiegoKusterr/ai-german-tutor-system',
        type: 'repository',
      },
      {
        label: 'Run Locally',
        url: 'https://github.com/DiegoKusterr/ai-german-tutor-system/blob/main/README.md',
        type: 'setup',
      },
    ],
    gallery: [
      {
        src: '/assets/projects/german-tutor/ai-german-tutor-conversation.png',
        alt: 'extended German tutor conversation with corrections and explanation value',
      },
      {
        src: '/assets/projects/german-tutor/ai-german-tutor-exam.png',
        alt: 'Goethe-style exam workspace in the AI German Tutor System',
      },
      {
        src: '/assets/projects/german-tutor/ai-german-tutor-progress.png',
        alt: 'AI mock exam workflow screen in the AI German Tutor System',
      },
    ],
    diagramSteps: [
      'Windows browser speech recognition',
      'FastAPI conversation API',
      'Ollama / Llama 3.2 response',
      'Persistent history and learning data',
      'Browser TTS playback',
    ],
    caseStudy: {
      overviewLine: 'Desktop-first local German tutor \u00b7 FastAPI / Ollama / Browser speech',
      whatItIs: [
        'Desktop-first local prototype for German conversation practice and structured learning.',
        'Requires local Python, Ollama and model installation; no publicly hosted interactive demo.',
      ],
      problem: [
        'Language learning workflows often separate speech input, feedback, memory and progress tracking.',
      ],
      built: [
        'FastAPI backend with local Ollama / Llama 3.2 inference and streaming conversation responses.',
        'Persistent conversation history, structured learning workflows and Windows browser TTS playback.',
      ],
      proof: [
        'Manually verified Windows browser speech recognition to Ollama to spoken reply workflow under documented test conditions.',
        '242 Python tests and 32 browser TTS regression tests; browser speech APIs are mocked in the latter.',
      ],
      technicalDetails: {
        architecture: [
          'FastAPI connects the browser to local Ollama inference, JSON conversation history and SQLite learning data.',
          'Browser recognition may use external speech services; Faster Whisper is optional and has not been verified end to end.',
        ],
        dataInputs: ['Text or browser-recognized speech from practice sessions.', 'Stored conversation history and learning progress data.'],
        logic: [
          'Ollama-based conversational feedback; recall with the 1B model is not consistently reliable.',
          'Browser voice availability and gender depend on the system; mobile support is not validated.',
        ],
        outputs: ['Streamed conversation responses and browser TTS playback.', 'Persistent conversation history and learning progress records.'],
      },
    },
  },
];
