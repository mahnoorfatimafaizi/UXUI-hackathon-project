"use client"
import { useRouter } from "next/navigation"


const SearchCartModel = () => {

    const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;


    if(name){
      router.push(`/list?name=${name}`)
    }
  }
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 left-5 flex flex-col gap-6 z-20">
       
       <form className="flex item-center justify between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
      <input type="text" name="name" placeholder="Search"  className="flex-1"/>
      <button className="cursor-pointer">
      <button className='rounded-md py-3 px-4 bg-customPurple text-white'>Search</button>
      </button>


    </form>
      </div>
  )
}

export default SearchCartModel