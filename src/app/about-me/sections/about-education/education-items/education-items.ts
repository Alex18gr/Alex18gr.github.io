import {EducationItem} from '../models/education-item-model';

export const educationItems: {[index: string]: EducationItem} = {
  msc: {
    institution: {
      name: 'University of Macedonia',
      department: 'Applied Informatics',
      location: 'Thessaloniki, Greece'
    },
    title: 'MSc in Applied Informatics with specialty «Computer Science and Technology»',
    duration: {
      from: {
        year: '2019',
        month: 'September',
      },
      to: {
        year: '2021',
        month: 'June'
      },
      inProgress: false
    }
  },
  bsc: {
    institution: {
      name: 'University of Macedonia',
      department: 'Applied Informatics',
      location: 'Thessaloniki, Greece'
    },
    title: 'BSc in Applied Informatics',
    duration: {
      from: {
        year: '2015',
        month: 'September'
      },
      to: {
        year: '2019',
        month: 'June'
      },
      inProgress: false
    }
  },
  erasmus: {
    institution: {
      name: 'University of Craiova',
      department: 'Department of Informatics',
      location: 'Craiova, Romania'
    },
    title: 'ERASMUS, Computer Science',
    duration: {
      from: {
        year: '2019',
        month: 'February'
      },
      to: {
        year: '2019',
        month: 'June'
      },
      inProgress: false
    }
  }
};
