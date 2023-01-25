<script>
  import frets from "./uke-chords.json";
  import { onMount } from "svelte";
  import {createQueryStore} from "./lib/URLSearchParamsStore"

  const highlightedChordsString = createQueryStore("chords");
  const showOrder = createQueryStore("order");

  export let name = "";

  let classes = "";
  let numbers = [];

  onMount(() => {
    let searchParams = new URLSearchParams(window.location.search);
    // showOrder = (searchParams.getAll("order")[0]?.toLowerCase() == "true");

    if (highlightedChordsString){ // if there are any chords in the url
      let highlightedChordsArray = $highlightedChordsString.split(",").map(v => v.trim());
      if (highlightedChordsArray.includes(name)) {
        classes = "bg-blue-100";
      } else {
        classes = "bg-slate-400 opacity-80"
      }

      numbers = highlightedChordsArray.reduce(function(a, e, i) {
        if (e === name)
          a.push(i);
        return a;
      }, []);   // [0, 3, 5]
      numbers = numbers.map((n) => n + 1) // start counting from 1

    } else { // no chords in the url; default
      classes = "bg-blue-100";
    }
});

function colorForNumber(number) {
  // colors from https://iamkate.com/data/12-bit-rainbow/
  let colors = [
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
  return colors[number];
}

</script>

<span class="{classes} m-2 p-4 text-center relative">
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