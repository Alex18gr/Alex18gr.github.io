import {ContactModel} from './models/contact-model';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export const contactDetails: ContactModel[] = [
  {
    title: 'Email',
    icon: faAt,
    url: 'mailto:alexchih02@gmail.com',
    urlDescription: 'email',
    description: 'alexchih02@gmail.com'
  },
  {
    title: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/alexandros-tsichouridis-80771415a/',
    urlDescription: 'LinkedIn profile link',
    description: 'in/alexandros-tsichouridis-80771415a/'
  },
  {
    title: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/Alex18gr',
    urlDescription: 'GitHub profile URL',
    description: 'github.com/Alex18gr'
  }
];
