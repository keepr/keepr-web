declare namespace Keeper {
  interface ProjectTask extends ApiModel {
    id: number;
    name: string;
    description: string;
    hours: number;
    date: Date;
    created: Date;
    modified: Date | null;
  }
}
