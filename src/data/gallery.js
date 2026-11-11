const imagePath = (fileName) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/${fileName}`;

export const galleryCategories = [
  'All Photos',
  'Conferences',
  'Student Presentations',
  'Research Activities',
  'Workshops',
  'Awards',
  'Classroom / Teaching',
  'Outreach'
];

export const galleryItems = [
  {
    category: 'Outreach',
    title: 'REU Data Analytics at Marshall University',
    date: '2025',
    location: 'Marshall University, Huntington, WV',
    caption:
      'REU Data Analytics at Marshall University',
    image: imagePath('reu-2025.jpg')
  },
  {
    category: 'Classroom / Teaching',
    title: 'teaching undergraduate students at CIT',
    date: '2022',
    location: 'Marshall University, Huntington, WV',
    caption:
      'Teaching undergraduate students at CIT .',
    image: imagePath('ug-teaching-2022.jpg')
  },
  {
    category: 'Outreach',
    title: 'Green & White Day Recruitment Activities',
    date: '2021',
    location: 'Marshall University, Huntington, WV',
    caption: 'Represented the CIT department during Marshall University Green & White Day recruitment activities and student outreach events.',
    image: imagePath('green-white-day.jpg')
  },
  {
    category: 'Outreach',
    title: 'College Recruitment Fair Representation',
    date: '2021',
    location: 'Marshall University, Huntington, WV',
    caption: 'Represented the department at a college recruitment fair, supporting student outreach and academic program visibility.',
    image: imagePath('recruitment-fair.jpg')
  },
  {
    category: 'Student Presentations',
    title: 'Celebrating Student Achievements in Research and Publication',
    date: '2018–2025',
    location: 'Marshall University',
    caption: 'Highlighting student success in conference papers, journal publications, research posters, and supervised scholarly projects.',
    image: imagePath('student-achievements.png')
  },
  {
    category: 'Awards',
    title: 'Graduate Hooding Ceremony',
    date: '2025',
    location: 'Marshall University',
    caption:
      'Participated in the College of Engineering and Computer Sciences Graduate Hooding Ceremony and celebrated student degree completion and academic achievement.',
    image: imagePath('hooding-ceremony-2025.jpg')
  },
  {
    category: 'Student Presentations',
    title: 'Student Research & Creativity Symposium',
    date: '2025',
    location: 'Huntington, WV, USA',
    caption:
      'Students presented supervised research posters in IoT, machine learning, cybersecurity, transportation analytics, and applied computing.',
    image: imagePath('student-research-symposium-2025.jpg')
  },
  {
    category: 'Student Presentations',
    title: 'INSPIRE Student Poster Presentations',
    date: '2025',
    location: 'Huntington, WV, USA',
    caption:
      'Student researchers presented posters on cybersecurity, traffic optimization, web systems, and applied computing projects.',
    image: imagePath('inspire-2025.jpg')
  },
  {
    category: 'Conferences',
    title: 'CSSET Student Project Presentations',
    date: '2024',
    location: 'Huntington, WV, USA',
    caption:
      'Students presented applied computing and web-development projects at the Computer Science Symposium on Emerging Technologies.',
    image: imagePath('csset-2024.jpg')
  },
  {
    category: 'Workshops',
    title: 'Research Camp',
    date: '2018',
    location: 'UUM',
    caption:
      'Research-focused training and collaboration activities supporting scholarly development and research productivity.',
    image: imagePath('research-camp-2018.jpg')
  },
  {
    category: 'Workshops',
    title: 'Optical Computing Laboratory Seminar',
    date: '2015',
    location: 'UUM',
    caption:
      'Participated in laboratory seminar activities related to optical computing and communication systems research.',
    image: imagePath('optical-computing-seminar-2015.jpg')
  },
  {
    category: 'Conferences',
    title: 'IEEE TENCON Participation',
    date: '2017',
    location: 'IEEE Region 10 Conference',
    caption:
      'Conference participation and scholarly engagement in IEEE regional activities and research dissemination.',
    image: imagePath('ieee-tencon-2017.jpg')
  },
  {
    category: 'Conferences',
    title: 'Springer IRICT Conference',
    date: '2018',
    location: 'UUM',
    caption:
      'Conference participation and scholarly engagement in Springer IRICT conference.',
    image: imagePath('irict-2018.jpg')
  },
  {
    category: 'Outreach',
    title: 'Ph.D commencement',
    date: '2017',
    location: 'UUM',
    caption:
      'Ph.D commencement ceremony at UUM.',
    image: imagePath('phd-commencement-2017.jpg')
  },
  {
    category: 'Research Activities',
    title: 'Viva Day',
    date: 'October 10, 2016',
    location: 'UUM',
    caption:
      'A key doctoral milestone marking research completion and academic progression.',
    image: imagePath('viva-day-2016.jpg')
  },
  {
    category: 'Awards',
    title: 'Best Paper Award and Second runner up for 3 miniutes thesis presentation at UUM',
    date: '2016',
    location: 'UUM',
    caption:
      'Award for research excellence and presentation skills at the doctoral level.',
    image: imagePath('3mt-2016.jpg')
  }
];