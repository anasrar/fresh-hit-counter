import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Code from "../islands/Code.tsx";

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>Hit Counter</title>
      </Head>
      <h3>HIT COUNTER</h3>
      <div className={"txt-center"}>
        Copy and paste the HTML code to your website. The image counter will
        increment on each page reload
      </div>
      <Code origin={props.url.origin} />
      <h4 className={"m-1"}>EXAMPLE</h4>
      <div className={"counter"}>
        <img
          src="/counter.svg"
          alt="hit counter"
          height={"64"}
        />
      </div>
      <h4 className={"m-1"}>NOTE</h4>
      <div className={"mb txt-center"}>
        This project is not meant to be used; it is only for showcase purposes
      </div>
      <footer>
        <div>
          <a href={"//github.com/anasrar/fresh-hit-counter"}>Source code</a>
        </div>
        <div>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
