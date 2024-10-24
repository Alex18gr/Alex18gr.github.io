import {AboutProjectModel} from './models/about-project-model';

const acodeLearnDescription = `

<p>
  A learning material distribution platform made for programming courses. It designed to conveniently present
  and provide programming oriented learning material to the students. Spring Framework with MySQL and Angular
  were used to develop this platform as the BSc Thesis.
</p>

`;

const ideLearnDescription = `

<p>
    The main purpose of this project is the identification of difficulties and problems that students meet while
    learning programming, the review of the literature for existing tools which assist the teaching and learning
    of programming, and the development and proposal of a tool that helps students improve their code quality
    and understanding of OOP concepts.
</p>
<p>
    This tool is developed as an Eclipse plugin which uses static analysis in order to analyze students’ code and guide
     them to a well-defined domain model by providing detailed instructions. This way, students’ solutions not only
     have the correct output but they also have a well-defined domain model. Along with the plugin, a tool to create
      exercises for IDE Learn is developed using Angular and Electron JS as a desktop application. The plugin was
      evaluated by 180 undergraduate students in the context of a course on “Didactics of Informatics” as a mandatory
      assignment which included solving an exercise with the tool’s assistance and completing a questionnaire about
      the usability and the educational support of the tool.
</p>

`;

export const projects: AboutProjectModel[] = [
  {
    title: 'IDE Learn',
    descriptionContent: ideLearnDescription,
    duration: {
      from: new Date('2023-07-01'),
      to: new Date('2023-07-01')
    },
    tags: []
  },
  {
    title: 'ACode Learn',
    descriptionContent: acodeLearnDescription,
    duration: {
      from: new Date('2018-09-01'),
      to: new Date('2019-09-01')
    },
    tags: []
  },
];


