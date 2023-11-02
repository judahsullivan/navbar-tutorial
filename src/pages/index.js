export default function Home() {
  return (
    <main className="p-5  gap-10 text-center flex flex-col bg-gray-200 justify-center items-center overflow-hidden w-full min-h-screen ">
      <div className=" flex-col flex ">
        <h3 className=" text-4xl sm:5xl md:text-6xl lg:text-7xl ">
          Welcome to the{" "}
        </h3>
        <h1 className="text-6xl md:text-7xl lg:text-8xl after:content-['_↗'] font-extrabold">
          Animated Navbar
        </h1>
      </div>{" "}
      <p className="text-xl">
        You can find the code{" "}
        <a className="underline" href="https://github.com/">
          here
        </a>{" "}
        and{" "}
        <a className="underline" href="">
          Video tutorial
        </a>{" "}
        is coming soon so please go subscribe to my channel! .
      </p>
      <p>
        Dont forget to give me a Star ⭐ or like 👍🏾 if you found this helpful!
      </p>
    </main>
  );
}
