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
    content : 'Manual Update is a completely user generated website with contributions from Updaters to help you keep your manual or textbook updated. Too often you find yourself stuck in a project because technology has changed. Or perhaps there is a better method that the author simply did not take into consideration. How about a typo? Have you ever found yourself pulling your hair out because the publisher left an important piece of code out?\n\nManual Update depends on you. Please help out the community and leave an Update. An update that may seem small or common knowledge to you, may save someone hours of time...and their sanity.\n\nUpdating also helps manuals and textbooks stay relative longer. Manual Update, not only saving you time, but money as well.\n\nDolore excepteur dolore ipsum qui aliquip laborum sunt enim fugiat non aliqua. Velit ut voluptate do adipisicing. Do laboris sit consectetur consequat officia officia dolor veniam eu qui veniam eiusmod. Deserunt minim est quis ad consectetur ipsum sunt eu ut ut minim. Tempor labore amet esse qui ex excepteur elit dolor reprehenderit sint elit non minim.'
  };

}
