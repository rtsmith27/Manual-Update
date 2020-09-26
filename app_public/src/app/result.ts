export class Update {
    chapter: string;
    updater: string;
    votes: number;
    section: string;
    updateText: string;
    createdOn: '';
    updateCount: number
  }

  export class Result {
    _id: string;
    title: string;
    edition: string;
    author: string[];
    publisher: string;
    isbn: string;
    lastUpdate: string;
    updateCount: number;
    updates: Update[] /*?, or string*/
  }