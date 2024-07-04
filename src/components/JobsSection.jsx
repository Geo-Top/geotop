import { Typography, List, ListItem, ListItemText, Collapse, ListSubheader } from '@mui/material';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const jobs = [
  {
    title: 'AI Specialist ',
    requirements: [
      "Bachelor's or Master's degree in Computer Science, Data Science, Mathematics, or a related field.",
      "Proficiency in programming languages such as Python, R, Java, or C++.",
      "Strong understanding of machine learning algorithms and techniques.",
      "Experience with deep learning frameworks like TensorFlow, Keras, or PyTorch.",
      "Knowledge of data preprocessing, data mining, and data visualization techniques.",
      "Previous experience working on AI or machine learning projects.",
      "Experience with cloud platforms such as AWS, Google Cloud, or Azure for AI solutions.",
      "Experience in natural language processing (NLP) and computer vision is a plus.",
      "Strong problem-solving skills and ability to think analytically.",
      "Ability to analyze large datasets and interpret results.",
      "Excellent verbal and written communication skills to explain complex AI concepts to non-technical stakeholders.",
      "Continuous learning mindset to stay updated with the latest AI advancements.",
      "Ability to work collaboratively in a team environment."
    ]
  },
  {
    title: 'Software Engineer ',
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field.",
      "Proficiency in programming languages such as Java, C#, Python, JavaScript, or Ruby.",
      "Experience with software development frameworks and tools like .NET, Spring, or React.",
      "Knowledge of database systems such as SQL, MySQL, or PostgreSQL.",
      "Familiarity with version control systems like Git.",
      "Experience in full software development lifecycle (SDLC) from requirements gathering to deployment.",
      "Hands-on experience with Agile development methodologies.",
      "Experience in developing scalable and high-performance applications.",
      "Strong analytical and debugging skills.",
      "Ability to troubleshoot and resolve software defects and issues.",
      "Good communication skills to collaborate with cross-functional teams.",
      "Ability to document and present technical designs and solutions.",
      "Strong attention to detail and commitment to delivering high-quality software.",
      "Ability to work independently as well as in a team environment.",
      "Willingness to learn and adopt new technologies and methodologies."
    ]
  }
];

function JobsSection() {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Available Jobs
        {/* <ArrowDropDown/> */}
      </Typography>
      <List>
        {jobs.map((job, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleClick(index)}>
        <ListItemText primary={job.title} /> 
        <ArrowDropDownIcon/>
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {job.requirements.map((req, reqIndex) => (
                  <ListItem key={reqIndex} sx={{ pl: 4 }}>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
}

export default JobsSection;
