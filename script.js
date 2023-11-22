// script.js
document.addEventListener('DOMContentLoaded', function () {
  const skillsSection = document.getElementById('skills');

  const skillData = {
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'PHP', 'Django'],
    'Programming': ['C', 'C++', 'Python', 'JAVA', 'R'],
    'Database': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Data Science': [
      'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel',
      'Machine Learning', 'Deep Learning', 'Statistics', 'Mathematics',
      'Probability', 'Algorithms', 'Data Structures', 'Data Visualization',
      'Data Analysis', 'Data Mining', 'Big Data', 'Business Intelligence',
      'Business Analytics', 'Business Analysis', 'ETL', 'Web Scraping'
    ]
    // Add more categories and skills as needed
  };

  // Function to create a list of skills for a category
  function createSkillList(skills) {
    const ul = document.createElement('ul');
    skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      ul.appendChild(li);
    });
    return ul;
  }

  // Function to create a skill category
  function createSkillCategory(category, skills) {
    const skillCategoryDiv = document.createElement('div');
    skillCategoryDiv.classList.add('skill-category');

    const h2 = document.createElement('h2');
    h2.textContent = category;

    skillCategoryDiv.appendChild(h2);
    skillCategoryDiv.appendChild(createSkillList(skills));

    return skillCategoryDiv;
  }

  // Loop through skill data and create categories
  for (const [category, skills] of Object.entries(skillData)) {
    skillsSection.appendChild(createSkillCategory(category, skills));
  }
});
