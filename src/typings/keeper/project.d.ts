declare namespace Keeper {
  interface Project extends ApiModel {
    id: number;
    name: string;
    budget: number;
    currency: string;
    hourlyRate: number;
    archive: boolean;
    created: Date;
    modified: Date | null;
  }
}
