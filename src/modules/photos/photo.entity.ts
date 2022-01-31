export class Photo {
  title: string;
  url: string;
  thumburl: string;
  author: string;
  tags: string;
  constructor(data: any) {
    // todo: add business logic here, validation, value objects maybe ?
    this.title = data.title;
    this.thumburl = data.thumburl;
    this.url = data.url;
    this.author = data.author;
    this.tags = data.tags;
  }
}
