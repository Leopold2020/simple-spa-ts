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
  await post(BASE_URL + url, data)
};

export const getPaintings = async () =>
  get<Painting[]>("/paintings");

export const addPainting = async (data: Painting) =>
  post<Painting>("/paintings", data);