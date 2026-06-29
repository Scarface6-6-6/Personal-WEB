export type InterestScene = {
  title: string;
  data: {
    label: string;
    value: string;
  }[];
};

export type InterestGroup = {
  title: string;
  items: string[];
};

export type InterestModule = {
  id: string;
  command: string;
  title: string;
  description: string;
  groups: InterestGroup[];
  scenes: InterestScene[];
  status: string;
};
