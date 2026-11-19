export const site = {
  name: "Nishan Jung Suwal",
  title: "Nishan Jung Suwal | Data Portfolio",
  description:
    "Data analyst and data scientist. Browse my projects, dashboards, and models, and get in touch.",
  role: "Data analyst + data scientist",
  tagline:
    "I turn messy data into clear answers, working models, and dashboards people actually use.",
  year: 2026,
};

export const marquee = [
  "Open to data analyst and data science roles",
  "Now exploring: Power BI and Tableau dashboards",
  "Every chart here was built from a real dataset",
  "Say hi, I reply to every email",
];

export const nav = [
  { label: "Welcome", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Numbers", href: "#numbers" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// The slices of the donut chart in the hero. Values are percentages and should add up to 100.
export const focus = {
  title: "Where my time goes on a project",
  slices: [
    { label: "Cleaning data", value: 40, color: "#ff6fd0" },
    { label: "Analysis and modelling", value: 30, color: "#8be9ff" },
    { label: "Visualization", value: 20, color: "#c8ff3d" },
    { label: "Explaining results", value: 10, color: "#b9a6ff" },
  ],
};

export const about = {
  filename: "about_me.txt",
  paragraphs: [
    "Hi! I'm a data person who likes questions with a messy answer. I clean the data, find the pattern, and explain it in plain words.",
    "I've built prediction models, dashboards, and SQL reports for teams that needed a decision, not a spreadsheet. I show my work so anyone can check it.",
    "When I'm not in a notebook I'm probably out with the IRLs or gaming with them.",
  ],
  facts: [
    { label: "Based in", value: "Bhaktapur, Nepal" },
    { label: "Main tools", value: "Python, SQL, Power BI" },
    { label: "Looking for", value: "Data analyst and data science roles" },
  ],
};

// The spreadsheet window. One row per number.
// The spreadsheet window. One row per number. Only list things you have actually done.
export const stats = [
  { label: "Projects built", value: "6", note: "All with code on GitHub" },
  { label: "Datasets analysed", value: "15", note: "Kaggle and open government data" },
  { label: "Largest dataset", value: "250K rows", note: "Cleaned and modelled in pandas" },
  { label: "Currently learning", value: "Forecasting", note: "Time series with Python" },
];
export const projects = [
  {
  title: "Nepal Agri Price Analysis",
  description:
    "Ten years of Kalimati market prices cleaned, merged and grouped by season to show how fruit and vegetable prices move. Group Big Data project, I built the charts.",
  tags: ["Python", "pandas", "Matplotlib", "Seaborn"],
  metric: { value: "294k", label: "price records analysed" },
  chart: {
    label: "Yam average autumn price in rupees per kg, 2013 to 2022, rising",
    values: [43, 38, 39, 40, 51, 42, 64, 69, 86, 77],
  },
  hue: 190,
  report: "https://github.com/Zungazzz/nepal-agri-price-analysis/blob/main/reports/nepal_agri_price_analysis_report.pdf",
  code: "https://github.com/Zungazzz/nepal-agri-price-analysis",
},
];

export const skills = [
  { name: "Python and pandas", level: 50 },
  { name: "SQL", level: 50 },
  { name: "Statistics", level: 50 },
  { name: "Machine learning", level: 50 },
  { name: "Dashboards (Power BI, Tableau)", level: 50 },
];

export const contact = {
  email: "jungsuwal@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Zungazzz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nishan-jung-suwal-519279238/" },
  ],
};
