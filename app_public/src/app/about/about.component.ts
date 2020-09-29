import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'About Manual Update',
      strapline: ''
    },
    content: '', /* `Manual Update is a completely user generated website with contributions from Updaters to help keep your manual or textbook updated. Have you find yourself stuck on a project because technology has changed. How about a typo? Or perhaps there's just a better method that the author simply did not take into consideration. Maybe you have found yourself pulling your hair out because the publisher left out an important piece of code.\n\nManual Update depends on you. Please help out the community and leave an Update. A problem that may seem small or common knowledge to you, may save someone hours of time...and their sanity.\n\nUpdating also keeps your manuals and textbooks relative longer. Manual Update not only saves you time, but money as well.\n\nDolore excepteur dolore ipsum qui aliquip laborum sunt enim fugiat non aliqua. Velit ut voluptate do adipisicing. Do laboris sit consectetur consequat officia officia dolor veniam eu qui veniam eiusmod. Deserunt minim est quis ad consectetur ipsum sunt eu ut ut minim. Tempor labore amet esse qui ex excepteur elit dolor reprehenderit sint elit non minim.`*/
  };

}
