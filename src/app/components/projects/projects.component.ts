import { Component } from '@angular/core';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Mala3bna Mobile App',
      date: 'Jan 2023 - May 2023',
      description:
        'As part of a development team, I actively contribute to the creation of the Mala3bna mobile app using Xamarin.Forms. The app simplifies stadium reservations for sports activities. I focus on front-end development, utilizing C# and XAML to create an intuitive and user-friendly interface. Collaborating with the team, we employ .NET for the back-end implementation. This project enhances my teamwork skills and provides valuable experience in mobile app development, user interface design, and collaborative software development.',
      iconName: 'sports_basketball',
      color: '#2C98F0',
    },
    {
      title: 'CSV Repository',
      date: 'May 2023 - May 2023',
      description:
        'Contributing to the CSV repository project, I utilize AWS tools such as Lambda functions, SNS, API Gateway, Amplify, S3, and DynamoDB. My role involves designing serverless functions for efficient CSV file processing and storage. I integrate SNS for event-driven communication and API Gateway for secure APIs. Additionally, I leverage S3 for object storage and DynamoDB for data management. This project provides valuable experience in AWS backend development, delivering a scalable and secure CSV repository solution.',
      iconName: 'cloud',
      color: '#EC5453',
    },
    {
      title: 'Inventory Management Web App',
      date: 'May 2022 - May 2022',
      description:
        'I actively contribute to the backend development of an inventory management web application as part of a collaborative team. Using Node.js, Express.js, and MySQL, I play a key role in designing and implementing the backend architecture. This includes creating efficient backend services, optimizing inventory operations, and working on the database schema design. My skills in backend web development enhance the functionality and efficiency of the web application.',
      iconName: 'code',
      color: '#F9BF3F',
    },
  ];
}
