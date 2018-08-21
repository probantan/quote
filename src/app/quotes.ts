export class Quotes {
  public showDetails: boolean;
  constructor(
    public author: string,
    public quote: string,
    public name: string,
    public Date: Date,
    public upVotes: number,
    public downVotes: number
  ) {
    this.showDetails = false;
  }
}
