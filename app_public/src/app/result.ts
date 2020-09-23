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
    isbn: number;
    lastUpdate: number;
    updateCount: number;
    updates: Update[] /*?, or string*/
  }