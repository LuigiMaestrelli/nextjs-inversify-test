import { IShape } from "./interfaces/shapes";
import { useDIContainer } from "./useDIContainer";
import { TYPES } from "./types";

export function useShapes(): IShape {
  return useDIContainer<IShape>(TYPES.Shapes);
}
