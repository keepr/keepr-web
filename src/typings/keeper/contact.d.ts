declare namespace Keeper {
  interface Contact extends ApiModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    created: Date;
    modified: Date | null;
  }
}
