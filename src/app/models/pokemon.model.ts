import { IStat } from './stat.model';

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprite: string;
    type1: string;
    type2?: string;
    abilities: string[];
    hiddenAbility?: string;
    stats: IStat[];
    description?: string;
}
