import Image from "next/image";

export default function Projects() {
  return (
    <div className="mx-auto w-1/2 mt-16">
      <h2 className="montserrat-unique-class text-xl text-stone-800 border-b-4 border-teal-500 inline-block mb-6">
        PROJECTS
      </h2>
      <div className="border-1 border-stone-400 p-4 rounded-xl shadow-xl">
        <div className="text-2xl">title</div>
        <div className="text-lg">tech stack</div>
        <p>
          Id magna ad occaecat Lorem fugiat do ea dolore nisi Lorem proident amet exercitation. Et
          adipisicing id deserunt in sit qui mollit non consectetur exercitation excepteur. Esse
          quis ut eiusmod quis incididunt sunt voluptate. Dolor pariatur sunt sint eu tempor eu
          ipsum nisi magna est. In consequat incididunt ut ex do labore proident tempor deserunt
          culpa deserunt nisi dolor.
        </p>
        <div className="flex flex-row mt-4">
          <Image
            src="/images/gotrip.png"
            className="rounded-xl"
            alt="gotrip image"
            width={300}
            height={250}
          />
        </div>
      </div>
      <div className="border-1 border-stone-400 p-4 rounded-xl shadow-xl mt-4">
        <div className="text-2xl">title</div>
        <div className="text-lg">tech stack</div>
        <p>
          Id magna ad occaecat Lorem fugiat do ea dolore nisi Lorem proident amet exercitation. Et
          adipisicing id deserunt in sit qui mollit non consectetur exercitation excepteur. Esse
          quis ut eiusmod quis incididunt sunt voluptate. Dolor pariatur sunt sint eu tempor eu
          ipsum nisi magna est. In consequat incididunt ut ex do labore proident tempor deserunt
          culpa deserunt nisi dolor.
        </p>
        <div className="flex flex-row mt-4">
          <Image
            src="/images/gotrip.png"
            className="rounded-xl"
            alt="gotrip image"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
