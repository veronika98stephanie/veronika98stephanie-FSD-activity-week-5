import { useEffect, useState } from "react";
import { Pet, DEFAULT_PET } from "@/type/pet";

export default function Home() {
  const [pet, setPet] = useState<Pet>({ id: 0, name: "", pet_type: "" });
  const [pets, setPets]  = useState<Pet[]>([]);

  useEffect(() => {
    // Initialize pets from localStorage or use defaults
    const storedPet = localStorage.getItem("pets");
    if (!storedPet) {
      localStorage.setItem("pets", JSON.stringify(DEFAULT_PET));
      setPets(DEFAULT_PET);
    } else {
      setPets(JSON.parse(storedPet));
    }
  }, []);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const updated = pets.map((p) =>
      p.id === pet.id
        ? { ...p, name: pet.name, pet_type: pet.pet_type }
        : p
    );
    setPets(updated);
    localStorage.setItem("pets", JSON.stringify(updated));
    setPet({ id: 0, name: "", pet_type: "" });
  }

  return (
    <>
      <div className="table-auto md:table-fixed">
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.pet_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <fieldset className="border border-gray-400 p-4 mt-4">
        <legend className="text-left font-semibold px-2">Pet Form</legend>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2 mb-6 md:grid-cols-9">
            <label htmlFor="pet-id">ID</label>
            <input
              id="pet-id"
              type="number"
              placeholder="Enter pet ID"
              className="border border-gray-400"
              value={pet.id}
              onChange={(e) => setPet({ ...pet, id: Number(e.target.value) })}
            />
            <label htmlFor="pet-name">Name</label>
            <input
              id="pet-name"
              type="text"
              placeholder="Enter pet name"
              className="col-span-2 border border-gray-400"
              value={pet.name}
              onChange={(e) => setPet({ ...pet, name: e.target.value })}
            />
            <label htmlFor="pet-type">Type</label>
            <select
              id="pet-type"
              className="col-span-2 border border-gray-400"
              value={pet.pet_type}
              onChange={(e) => setPet({ ...pet, pet_type: e.target.value })}
            >
              <option value="">Select Pet Type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="rabbit">Rabbit</option>
            </select>
          </div>
          <button type="submit" className="border border-gray-400 text-gray-600">Update Pet</button>
        </form>
      </fieldset>
    </>
  )
}