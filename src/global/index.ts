import { atom } from "jotai";
import { CityEntity } from "../api/Entities/EntityDefinition";

export const citiesAtom = atom<CityEntity[]>([]);
