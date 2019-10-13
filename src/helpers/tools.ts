/* eslint no-use-before-define: 0 */
import { validateArrayData } from "./validators";

// This is used for commonly used variables and values
export const dataFormats = {
  json: "json",
  csv: "csv",
};

// Converting data to meet from requirement
export const handleJSONData = (data: any) => {
  try {
    return true;
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log(e);
  }
};

export const handleTotalPages = (arrData: any, rows: number) => {
  if (validateArrayData(arrData)) {
    return Math.ceil(arrData.length / rows);
  }

  return 0;
};

// Handling pagination
export const handleDataPagination = (
  data: any,
  currentKey: number,
  rows: number
) => {
  let xKey = 0;

  const results: any = data.filter((el: any, key: number) => {
    const tmpData: any = [];
    if (key >= currentKey && xKey < rows) {
      tmpData.push(el);
      xKey += 1;
      return tmpData;
    }
  });
  return results;
};

export const replaceURLTypo = (path: string) => {
  return path.replace("/0.2", "");
};

export const verifyImageUrl = (path: string) => {
  try {
    const http = new XMLHttpRequest();

    http.open("HEAD", path, false);
    http.send();

    if (http.status !== 404) {
      return path;
    }

    return replaceURLTypo(path);
  } catch (e) {
    console.log(e);
  }
};

export const capitalizeFirstLetter = (el: string) => {
  return el.charAt(0).toUpperCase() + el.slice(1);
};

export const handleJSONDataFix = (data: any) => {
  try {
    if (data) {
      const tmpData: any = data.split("\n");
      tmpData.shift();
      return tmpData;
    }
  } catch (e) {
    return [];
  }
};
