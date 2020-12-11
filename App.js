import cache from "./app/utility/cache";

export default function App() {
  const demo = async () => {
    await cache.store("person", { id: 1 });
    const person = await cache.get("person");
    console.log(person);
  };

  demo();

  return null;
}
