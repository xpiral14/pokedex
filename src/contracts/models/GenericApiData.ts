export default interface GenericApiData {
  results: {
    name: string;
    url: string;
  }[];
  next: string;
  previous: string;
}
