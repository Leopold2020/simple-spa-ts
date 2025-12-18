const BASE_URL = "http://localhost:3000";

export interface Painting {
  name:string;
  description:string;
  imageUrl:URL | string;
  painter:object
}

const get = async <T>(url: string) => {
  return new Promise<void>(async(resolve, reject) => {
    
    await window.fetch(BASE_URL + url, {
      method: 'get',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    }).then(async response => {
      let toSend = await response.json()
      
      
      // console.log(toSend)
      resolve(toSend)
    })
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