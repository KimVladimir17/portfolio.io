import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import highlightMatch from "./highlightMatch";
import Loading from "./Loading";

export default function MainPlaySearch() {
  const [picked, setPicked] = useState<any>(null);
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🟢 Загружаем список всех покемонов 1 раз
  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1328"
        );
        const names = res.data.results.map((p: any) => p.name);
        setPokemons(names);
      } catch {
        setError("Ошибка при загрузке списка покемонов.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    if (!pokemon) return;
    setLoading(true);
    const delay = setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );
        setPicked(res.data);
        setPokemon("");
      } catch {
        setError("Ошибка при загрузке покемона.");
      } finally {
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(delay);
  }, [pokemon]);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      setPicked(null);
      return;
    }
    if (picked) setPicked(null);

    const delay = setTimeout(() => {
      const results = pokemons.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results.slice(0, 10));
    }, 400);

    return () => clearTimeout(delay);
  }, [query, pokemons]);

  const pickPokemon = (name: string) => {
    setPokemon(name);
    setQuery(name);
    setFiltered([]);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-3">
        <IoSearch color="#2563eb" /> Search Pokemon
      </h2>

      {/* Поле поиска */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
        placeholder="Search Pokémon..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {loading && <Loading />}
      {error && <p className="text-red-500">{error}</p>}
      {/* 🧩 Карточка выбранного покемона */}
      {picked && typeof picked === "object" && (
        <AnimatePresence>
          <motion.div
            key={picked.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className=" bg-white shadow rounded-xl p-4 h-48"
          >
            <h2 className="text-xl font-semibold mb-2 capitalize ">
              {picked.name}
            </h2>
            <img
              src={picked.sprites?.front_default}
              alt={picked.name}
              className="mx-auto w-20 h-20"
            />
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Height:</span> {picked.height}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Weight:</span> {picked.weight}
            </p>
          </motion.div>
        </AnimatePresence>
      )}
      {!picked && !loading && (
        <div className={` h-48 space-y-1 overflow-y-auto `}>
          <AnimatePresence>
            {filtered.length > 0
              ? filtered.map((item) => (
                  <motion.div
                    key={item}
                    onClick={() => pickPokemon(item)}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md mb-2 shadow-sm 
                             hover:bg-gray-200 cursor-pointer"
                  >
                    {highlightMatch(item, query)}
                  </motion.div>
                ))
              : !loading &&
                query.trim() && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-400 text-center"
                  >
                    No results found.
                  </motion.p>
                )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
