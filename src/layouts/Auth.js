const logo = require('public/img/register_bg_2.png');

export default function Auth({ children }) {
  return (
    <>
      <main>
        <section className="relative flex justify-center items-center min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${logo.default.src})`,
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
