# Recruitment Analysis Dashboard

## Overview

This project is a React-based dashboard application that visualizes recruitment data for an organization. It provides insights into various aspects of the recruitment process, including company distribution by sector, recruitment trends by department, CTC analysis, and program distribution.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

To install the Recruitment Analysis Dashboard, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/recruitment-analysis-dashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd recruitment-analysis-dashboard
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

## Usage

To run the Recruitment Analysis Dashboard, use the following command:

```
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

## Project Structure

```
recruitment-analysis-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── CompanyChart.js
│   │   ├── RecruitmentTrendChart.js
│   │   ├── CTCAnalysisChart.js
│   │   └── ProgramDistributionChart.js
│   ├── data/
│   │   └── recruitmentData.js
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
```



## Dependencies

- React
- Recharts
- Tailwind CSS
- PostCSS
- Autoprefixer

