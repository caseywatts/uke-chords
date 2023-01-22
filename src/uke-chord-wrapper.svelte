<script>
  import frets from "./uke-chords.json";
  import { onMount } from "svelte";

  export let name = "";

  let classes = "";
  let numbers = [];
  let showOrder = false;

  onMount(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let highlightedChordsString = searchParams.getAll("chords")[0];
    debugger;
    showOrder = (searchParams.getAll("order")[0].toLowerCase() == "true");

    if (highlightedChordsString){ // if there are any chords in the url
      let highlightedChordsArray = highlightedChordsString.split(",").map(v => v.trim());
      debugger;
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

</script>

<span class="{classes} m-2 p-4 text-center relative">
  {#if showOrder}
    {#if numbers.length > 0}
      <span class="absolute -right-3 -top-3 bg-red-200 p-2 rounded-full aspect-square">{numbers}</span>
    {/if}
  {/if}
  <uke-chord img frets={frets[name]} name={name}></uke-chord>
</span>