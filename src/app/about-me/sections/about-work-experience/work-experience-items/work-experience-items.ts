import {WorkExperience} from '../models/work-experience-model';

const armyDescription = `

<ul>
    <li>Mandatory Military Training</li>
    <li>Duty scheduling and office paperwork</li>
    <li>Wired and wireless communications specialist</li>
</ul>

`;

const infodimPositionDescription = `

<ul>
    <li>Learning of how the industry works</li>
    <li>Writing HTML, CSS, JavaScript and TypeScript code following best practices indicated by seniors</li>
    <li>Developing GIS web platform using Dojo Toolkit and Angular</li>
    <li>Focusing on Angular form management (dynamic form, dynamic validation, dynamic submission)</li>
</ul>

`;

export const workExperienceItems: WorkExperience[] = [
  {
    key: 'deloitte_1',
    company: 'Deloitte',
    duration: {
      from: new Date('2024-07-01'),
    },
    positions: [
      {
        companyName: 'Deloitte',
        duration: {
          from: new Date('2023-07-01'),
        },
        positionTitle: 'Senior Software Engineer',
        positionType: 'Full Time',
        location: 'Thessaloniki, Central Macedonia, Greece'
      },
    ]
  },
  {
    key: 'army_1',
    company: 'Greek Army',
    duration: {
      from: new Date('2023-10-01'),
      to: new Date('2024-07-01')
    },
    positions: [
      {
        companyName: 'Greek Army',
        duration: {
          from: new Date('2023-10-01'),
          to: new Date('2024-07-01')
        },
        positionTitle: 'Soldier - Military Officer',
        positionType: 'Military Service',
        location: 'Thessaloniki, Central Macedonia, Greece',
        description: armyDescription
      }
    ]
  },
  {
    key: 'deloitte_1',
    company: 'Deloitte',
    duration: {
      from: new Date('2020-02-01'),
      to: new Date('2023-10-01')
    },
    positions: [
      {
        companyName: 'Deloitte',
        duration: {
          from: new Date('2023-07-01'),
          to: new Date('2023-10-01')
        },
        positionTitle: 'Senior Software Engineer',
        positionType: 'Full Time',
        location: 'Thessaloniki, Central Macedonia, Greece'
      },
      {
        companyName: 'Deloitte',
        duration: {
          from: new Date('2020-03-01'),
          to: new Date('2023-07-01')
        },
        positionTitle: 'Software Engineer',
        positionType: 'Full Time',
        location: 'Thessaloniki, Central Macedonia, Greece'
      },
      {
        companyName: 'Deloitte',
        duration: {
          from: new Date('2020-02-01'),
          to: new Date('2020-03-01')
        },
        positionTitle: 'Java EE Trainee',
        positionType: 'Internship',
        location: 'Thessaloniki, Central Macedonia, Greece'
      }
    ]
  },
  {
    key: 'infodim_1',
    company: 'INFODIM L.P.',
    duration: {
      from: new Date('2019-06-01'),
      to: new Date('2019-09-01')
    },
    positions: [
      {
        companyName: 'INFODIM L.P.',
        duration: {
          from: new Date('2019-06-01'),
          to: new Date('2019-09-01')
        },
        positionTitle: 'Frontend Web Developer',
        positionType: 'Internship',
        location: 'Thessaloniki, Central Macedonia, Greece',
        description: infodimPositionDescription
      }
    ]
  }
];


