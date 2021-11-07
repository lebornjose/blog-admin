const headers:any = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json'
});

const get = (url: RequestInfo) => {
  return fetch(url, {
    method: 'GET',
    headers: headers
  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    console.error(`Request failed. Url = ${url} . Message = ${err}`);
    return {error: {message: 'Request failed.'}};
  })
};

const post = (url: RequestInfo, data: any) => {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => {
    return handleResponse(url, response);
  }).catch(err => {
    return {error: {message: 'Request failed.'}};
  })
}

const handleResponse = (url: RequestInfo, response: Response) => {
  if (response.status < 500) {
    return response.json();
  } else {
    console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
    return {error: {message: 'Request failed due to server error '}};
  }
};
export { get, post };
