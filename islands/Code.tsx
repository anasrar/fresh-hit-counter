import { useSignal } from "@preact/signals";

export default function ({ origin }: { origin: string }) {
  const debounce = useSignal(0);

  return (
    <div className={"container-code"}>
      <button
        className={"copy-code"}
        onClick={(ev: Event) => {
          const el = ev.currentTarget as HTMLElement;
          navigator.clipboard.writeText(origin + "/counter.svg");
          el.innerHTML = "COPIED";
          clearInterval(debounce.value);
          debounce.value = setInterval(() => {
            el.innerHTML = "COPY";
          }, 1000);
        }}
      >
        COPY
      </button>
      <div className={"code"}>
        <pre>
            <code>
              <span style="color:#43444D">&lt;</span><span style="color:#C58FFF">img</span><span style="color:#868690"> </span><span style="color:#FDFDFE;font-style:italic">src</span><span style="color:#575861">=</span><span style="color:#9898A6">"{origin}/counter.svg"</span><span style="color:#868690"> </span><span style="color:#FDFDFE;font-style:italic">alt</span><span style="color:#575861">=</span><span style="color:#9898A6">"hit counter"</span><span style="color:#868690"> </span><span style="color:#43444D">/&gt;</span>
            </code>
        </pre>
      </div>
    </div>
  );
}
