export type Pet = {
    id: number, 
    name: string,
    pet_type: string,
};

export const DEFAULT_PET: Pet[] = [
    {id: 1, name: "Daisy", pet_type: "Dog"},
    {id: 2, name: "Saphira", pet_type: "Cat"},
]