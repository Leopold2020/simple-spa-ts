const BASE_URL = "http://localhost:3000";

export interface Painting {
  name:string;
  description:string;
  imageUrl:URL | string;
  painter:object
}

const get = async <T>(url: string) => {
  await get(BASE_URL + url).then(response => {
    return response
  })
};

const post = async <T>(url: string, data: T) => {
  console.log(url)
  await window.fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      data
    })
  }).then(response => {
    console.log(response)
  })
};

export const getPaintings = async () =>
  get<Painting[]>("/paintings");

export const addPainting = async (data: Painting) =>
  post<Painting>("/paintings", data);