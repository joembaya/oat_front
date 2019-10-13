/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint no-use-before-define: 0 */
export const validateJSONData = (arrData: any) => {
  try {
    if (Array.isArray(arrData) || arrData.length) {
      // array does not exist, is not an array, or is empty
      // ⇒ do not attempt to process array
      return true;
    }
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

export const validateArrayData = (arrData: any) => {
  try {
    if (Array.isArray(arrData) || arrData.length) {
      // array does not exist, is not an array, or is empty
      // ⇒ do not attempt to process array
      return true;
    }
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    return false;
  }
};

export const validateXYZData = () => {
  try {
    return true;
    // eslint-disable-next-line no-unreachable
  } catch (e) {
    console.log(e.message);
    return false;
  }
};
