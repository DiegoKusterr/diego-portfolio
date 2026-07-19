const email = 'diegokusterma@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/diego-k%C3%BCster-marqu%C3%A9s/';
const githubUrl = 'https://github.com/DiegoKusterr';
const cvUrl = '/cv/Diego_Kuster_Marques_EN.pdf';
const bookMeetingUrl = 'https://calendly.com/diegokusterma/30min';

export const profile = {
  name: 'Diego K\u00fcster Marqu\u00e9s',
  headline: 'Data Engineering & Analytics | ML, BI & Automation',
  email,
  linkedinUrl,
  githubUrl,
  cvUrl,
  bookMeetingUrl,
  endorsements: [],
  hero: {
    eyebrow: 'Data Systems Portfolio',
    title: 'Diego K\u00fcster Marqu\u00e9s',
    subtitle:
      'I build data pipelines, analytics systems and machine learning products that turn raw data into validated, decision-ready outputs.',
    focusLine: 'Financial ML \u00b7 Lakehouse Analytics \u00b7 Data Quality \u00b7 Portfolio Analytics \u00b7 AI Language Tools',
  },
  credibilityItems: [
    {
      label: 'PowerCo / Volkswagen Group',
      value: 'Reporting Analytics & Automation Intern',
    },
    {
      label: 'Schwarz IT / Schwarz Group',
      value: 'Cloud Data Engineer Intern',
    },
    {
      label: 'University of Valencia',
      value: 'B.Sc. Business Intelligence & Analytics',
    },
    {
      label: 'Hochschule Heilbronn',
      value: 'Erasmus Exchange',
    },
  ],
  skills: [
    {
      group: 'Programming & Machine Learning',
      items: ['Python', 'SQL', 'scikit-learn', 'Machine Learning models', 'R'],
    },
    {
      group: 'Data Engineering',
      items: ['Snowflake', 'BigQuery', 'dbt', 'Spark (PySpark)', 'ETL', 'Google Cloud Platform'],
    },
    {
      group: 'Application Development & DevOps',
      items: ['FastAPI', 'Docker', 'Git', 'Azure DevOps'],
    },
    {
      group: 'Business Intelligence & Automation',
      items: ['Power BI', 'n8n', 'Power Automate', 'Excel/VBA'],
    },
  ],
  contactNote:
    'For the full professional background, use the CV. For technical depth, review the case studies and repositories.',
  availabilityLine:
    'Open to Data Engineering, Analytics, BI and ML roles in Switzerland and internationally.',
  links: {
    cv: {
      label: 'CV',
      href: cvUrl,
      download: true,
    },
    linkedin: {
      label: 'LinkedIn',
      href: linkedinUrl,
    },
    github: {
      label: 'GitHub',
      href: githubUrl,
    },
    email: {
      label: 'Email',
      href: `mailto:${email}`,
    },
    meeting: {
      label: 'Book a meeting',
      href: bookMeetingUrl,
    },
  },
};
