import { IsInt, IsString, isPositive } from 'class-validator';

export class CreatePokemonDto {

    @IsInt()
    no: number;

    @IsString()
    name: string;

}
