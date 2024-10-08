// src/data/recruitmentData.js

export const recruitmentData = [
    {
      company: "SmartBrew",
      sector: "Private",
      jobDesignation: "Head HR/ TA",
      hiringDepartments: [
        "Computer Science and Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Metallurgical and Materials Engineering",
        "Chemical Engineering",
        "Civil and Infrastructure Engineering",
        "Bioscience and Bioengineering",
        "Mathematics",
        "Physics",
        "Chemistry",
        "School of Management and Entrepreneurship",
        "School of Design"
      ],
      eligiblePrograms: [
        "B.Tech",
        "M.Tech",
        "M.Sc",
        "MBA",
        "M.Des",
        "Ph.D"
      ],
      ctcRange: {
        btech: "N/A",
        mtech: "N/A",
        msc: "N/A",
        phd: "N/A",
        mba: "N/A"
      }
    }
  ];
  
  export const getCompanyDistribution = () => {
    const distribution = {};
    recruitmentData.forEach(item => {
      if (distribution[item.sector]) {
        distribution[item.sector]++;
      } else {
        distribution[item.sector] = 1;
      }
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
  };
  
  export const getProgramDistribution = () => {
    const distribution = {};
    recruitmentData.forEach(item => {
      item.eligiblePrograms.forEach(program => {
        if (distribution[program]) {
          distribution[program]++;
        } else {
          distribution[program] = 1;
        }
      });
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
  };
  
  export const getDepartmentDistribution = () => {
    const distribution = {};
    recruitmentData.forEach(item => {
      item.hiringDepartments.forEach(dept => {
        if (distribution[dept]) {
          distribution[dept]++;
        } else {
          distribution[dept] = 1;
        }
      });
    });
    return Object.entries(distribution).map(([name, value]) => ({ name, value }));
  };
  
  // Note: Since we don't have actual CTC data, we'll create dummy data for the CTC analysis
  export const getCTCAnalysis = () => {
    return [
      { program: "B.Tech", avgCTC: 15 },
      { program: "M.Tech", avgCTC: 18 },
      { program: "M.Sc", avgCTC: 12 },
      { program: "Ph.D", avgCTC: 20 },
      { program: "MBA", avgCTC: 22 }
    ];
  };