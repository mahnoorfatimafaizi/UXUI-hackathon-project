"use client";
import { useRouter } from "next/navigation";

const SearchCartModel = () => {
  const router = useRouter();

  
  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "") 
      .replace(/\s+/g, "-"); 
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      const slug = generateSlug(name); 
      router.push(`/product/${slug}`); 
    }
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 left-5 flex flex-col gap-6 z-20">
      <form
        className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="name"
          placeholder="Search"
          className="flex-1"
        />
        <button className="rounded-md py-3 px-4 bg-customPurple text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCartModel;
