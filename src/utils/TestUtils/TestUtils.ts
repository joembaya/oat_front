import { shallow } from "enzyme";

export const mockOriginalFunctionality = (name: string) => {
  const actualModule = require.requireActual(name);

  return {
    ...Object.getOwnPropertyNames(actualModule)
      .map(functionName => ({
        [functionName]: jest
          .fn()
          .mockImplementation((...args) => actualModule[functionName](...args)),
      }))
      .reduce((accumulator, currentValue) => ({
        ...accumulator,
        ...currentValue,
      })),
  };
};

export const shallowWrappedComponent = wrappedComponent =>
  shallow(shallow(wrappedComponent).get(0));
