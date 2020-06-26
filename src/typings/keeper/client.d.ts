declare namespace Keeper {
  interface Client extends ApiModel {
    id: number;
    name: string;
    address: string;
    created: Date;
    modified: Date | null;
  }

  interface ClientWithData extends Client {
    contacts: Keeper.Contact[];
    projects: Keeper.Project[];
  }
}
