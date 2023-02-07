<script>
  import frets from "./uke-chords.json";
  import { createParamsArrayStore, createParamsBooleanStore } from "./lib/URLSearchParamsStore"

  const highlightedChordsArray = createParamsArrayStore("chords");
  const showOrder = createParamsBooleanStore("order");
  const grayscale = true;

  export let name = "";
  export let highlight = "panel";

  let classes = "";
  let style = "";
  let numbers = [];

  if ($highlightedChordsArray) {
    let noChordsInURL = ($highlightedChordsArray.length == 0);

    if (noChordsInURL){
      classes = "bg-blue-100";
    } else {
      if ($highlightedChordsArray.includes(name)) {
        classes = "bg-blue-100";
      } else {
        classes = "bg-slate-400 opacity-80"
      }

      numbers = $highlightedChordsArray.reduce(function(a, e, i) {
        if (e === name)
          a.push(i);
        return a;
      }, []);   // [0, 3, 5]
      numbers = numbers.map((n) => n + 1) // start counting from 1
    }
  }

  if (highlight == "panel") {
    style = `background-color: ${colorForNumber(numbers[0])};`;
  }

function colorForNumber(number) {
  // colors from https://iamkate.com/data/12-bit-rainbow/
  let colors
  if (grayscale) {
    colors = [
      "#FFF",
      "#EEE",
      "#DDD",
      "#CCC",
      "#BBB",
      "#AAA",
      "#999",
      "#888",
      "#777",
      "#666",
      "#555",
      "#444",
    ]
  } else {
    colors = [
      // "#817",
      "#a35",
      "#c66",
      "#e94",
      "#ed0",
      "#9d5",
      "#4d8",
      "#2cb",
      "#0bc",
      "#09c",
      "#36b",
      "#639"
    ]
    colors = [
      "#FECACA",
      "#FED7AA",
      "#FEF08A",
      "#D9F99D",
      "#99F6E4",
      "#A5F3FC",
      "#BFDBFE",
      "#C7D2FE",
      "#E9D5FF",
      "#FBCFE8"
    ]
  }
  return colors[number];
}

</script>

<span class="{classes} inline-block m-2 p-4 h-40 text-center relative" {style}>
  {#if $showOrder}
    {#if numbers.length > 0}
      <span class="absolute -left-4 -top-3">
        {#each numbers as number}
          <span class="bg-red-200 px-2 py-1 m-1 rounded-full outline outline-6 outline-white font-bold" style="background-color: {colorForNumber(number)}; text-shadow: 0px 0px 3px white, 0px 0px 2px white, 0px 0px 1px white;">{number}</span>
        {/each}
      </span>
    {/if}
  {/if}
  <uke-chord img frets={frets[name]} name={name}></uke-chord>
</span>