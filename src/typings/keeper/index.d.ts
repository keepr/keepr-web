declare namespace Keeper {
  interface ApiModel {
    [key: string]: string | number | boolean | Date | ApiModel | null;
  }

  interface ApiResponse {
    status: string;
    data: ApiModel | ApiModel[] | string | string[] | number | boolean;
  }

  interface ApiError {
    status: string;
    message: string;
  }
}
