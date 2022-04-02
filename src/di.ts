import { Container } from "inversify";
import { Circle } from "./circle";
import { ShapeCircle } from "./interfaces/circle";
import { IShape } from "./interfaces/shapes";
import { ShapeSquare } from "./interfaces/square";
import { ShapeTriangle } from "./interfaces/triangle";
import { Shapes } from "./shapes";
import { Square } from "./square";
import { Triangle } from "./triangle";
import { TYPES } from "./types";

const diContainer = new Container();
diContainer.bind<IShape>(TYPES.Shapes).to(Shapes).inSingletonScope();
diContainer.bind<ShapeSquare>(TYPES.Square).to(Square).inSingletonScope();
diContainer.bind<ShapeTriangle>(TYPES.Triangle).to(Triangle).inSingletonScope();
diContainer.bind<ShapeCircle>(TYPES.Circle).to(Circle).inSingletonScope();

export { diContainer };
