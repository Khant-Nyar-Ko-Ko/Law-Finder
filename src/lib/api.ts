import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(baseUrl);
  return response.data;
};
