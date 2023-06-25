export interface Profile {
  image: string;
  name: string;
  jobTitle: string;
  country: string;
  links: Link[];
}

interface Link {
  title: string;
  url: string;
}
