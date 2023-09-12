import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div>
        <h3>Page not found</h3>
        <p className={"txt-center"}>
          The page you were looking for doesn't exist.
        </p>
        <div className={"m-1 txt-center"}>
          <a href="/">Go back home</a>
        </div>
        <div className={"txt-center"}>
          <img
            src="/counter.svg"
            alt="hit counter"
            height={"64"}
          />
        </div>
      </div>
    </>
  );
}
