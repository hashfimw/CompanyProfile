"use client";
import { useState, useEffect } from "react";

export default function Teams() {
  const [people, setPeople] = useState<any[]>([]); // Untuk menyimpan data people
  const [loading, setLoading] = useState<boolean>(true); // Untuk menampilkan loading state

  // Mengambil data dari API https://randomuser.me/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5"); // Mengambil 5 user secara acak
        const data = await response.json();
        setPeople(data.results); // Menyimpan data yang didapatkan ke state people
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Menandakan data telah diambil
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Menampilkan loading jika data masih dalam proses pengambilan
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person: any) => (
            <li key={person.login.uuid}>
              <div className="flex items-center gap-x-6">
                <img
                  alt={person.name.first}
                  src={person.picture.medium}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{`${person.name.first} ${person.name.last}`}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
