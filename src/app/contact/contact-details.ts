import {ContactModel} from './models/contact-model';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export const contactDetails: ContactModel[] = [
  // {
  //   title: 'Email',
  //   icon: faAt,
  //   url: 'mailto:--EMAIL--',
  //   description: '--EMAIL--'
  // },
  {
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/alexandros-tsichouridis-80771415a/',
    description: 'in/alexandros-tsichouridis-80771415a/'
  },
  {
    title: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/Alex18gr',
    description: 'github.com/Alex18gr'
  }
];
