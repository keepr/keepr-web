declare namespace Keeper {
  interface User extends ApiModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    currency: string;
    hourlyRate: string;
    created: Date;
    modified: Date | null;
  }
}
