export const locations = [
  {
    institutionId: 1,
    institution: 'usp',
    description: "Esta instituição possui diversos cursos de técnologia.",
    location: {
      latitude: -22.7054356,
      longitude: -45.0999279,
    }
  },
  {
    institutionId: 2,
    institution: 'unip',
    description: "Esta instituição possui cursos relacionados a data science.",
    location: {
      latitude: -23.2579251,
      longitude: -45.9238511,
    }
  }
];

export const institution = [
  {
    id: 1,
    name: 'usp',
    courses: [
      {
        id: 1,
        name: 'Analise e desenvolvimento de sistemas',
        description: 'Uma descrição bem legal aqui',
        image: 'https://www.pngarts.com/files/3/Technology-PNG-Photo.png'
      },
      {
        id: 2,
        name: 'Desenvolvimento java',
        description: 'Uma descrição bem legal aqui',
        image: 'https://logodownload.org/wp-content/uploads/2017/04/java-logo-1-140x140.png'
      },
    ]
  },
  {
    id: 2,
    name: 'unip',
    courses: [
      {
        id: 1,
        name: 'Data science',
        description: 'Uma descrição bem legal aqui',
        image: 'https://www.vhv.rs/dpng/d/13-139580_data-science-icon-png-transparent-png.png'
      },
      {
        id: 2,
        name: 'Deep learning',
        description: 'Uma descrição bem legal aqui',
        image: 'https://e7.pngegg.com/pngimages/685/504/png-clipart-artificial-intelligence-machine-learning-computer-icons-technology-electronics-text.png'
      },
    ]
  },
]
