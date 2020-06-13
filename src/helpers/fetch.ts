const mergeHeaders = (
  body: RequestInit,
  headers: HeadersInit
): RequestInit => ({
  ...body,
  headers: {
    ...body.headers,
    ...headers,
  },
});

export const Fetch = async (input: RequestInfo, body?: RequestInit) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const requestBody = mergeHeaders(body || {}, headers);
  const response = await fetch(input, requestBody);

  if (response.ok) {
    const apiResponse: Keeper.ApiResponse = await response.json();
    return apiResponse.data;
  } else {
    const apiError: Keeper.ApiError = await response.json();
    throw new Error(apiError.message);
  }
};

export const FetchWithAuth = (url: string, body?: RequestInit) => {
  const token = localStorage.getItem('auth');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const requestBody = mergeHeaders(body || {}, headers);

  return Fetch(url, requestBody);
};
