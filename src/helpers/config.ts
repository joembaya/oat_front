export const settings = {
  load: true,
  format: "csv",
  remote: {
    json: "http://localhost/api/api/?format=json",
    csv: "http://localhost/api/api/",
    pickles: "https://www.pickles.lu/api/oat/users",
  },
  pagination: {
    rows: 10,
  },
};

export type ISettings = {
  load: Boolean;
  format: string;
  remote: {
    json: string;
    csv: string;
    pickles: string;
  };
  pagination: {
    rows: number;
  };
};
