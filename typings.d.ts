interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Info extends SanityBase {
  _type: "info";
  bio: string;
  typewriter: string[];
  bioImage: Image;
  homePageImage: Image;
  name: string;
  shortBio: string;
  resume: string;
}

export interface Passion extends SanityBase {
  _type: "passion";
  title: string;
  type: string;
  description: string;
  skill: Skill[];
  image: Image;
  /*   initialData: date;
  endData: date; */
  url: string;
}

export interface Skill extends SanityBase {
  _type: "skill";
  title: string;
  level: number;
  image: Image;
}

export interface Social extends SanityBase {
  _type: "social";
  title: string;
  url: string;
}

export interface Work extends SanityBase {
  _type: "work";
  job: string;
  company: string;
  description: string;
  image: Image;
  initialData: date;
  endData: date;
  current: boolean;
  skill: Skill[];
  bulletPoint: string[];
}
