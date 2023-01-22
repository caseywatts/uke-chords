<script>
  export let name = "";
  import frets from "./uke-chords.json";
  import { onMount } from "svelte";

  let classes = "";

  onMount(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let highlightedChordsString = searchParams.getAll("chords")[0];

    if (highlightedChordsString){ // if there are any chords in the url
      let highlightedChordsArray = highlightedChordsString.split(",");
      if (highlightedChordsArray.includes(name)) {
        classes = "bg-blue-100";
      } else {
        classes = "bg-slate-400 opacity-80"
      }
    } else { // no chords in the url; default
      classes = "bg-slate-100";
    }
  })
</script>

<span class="{classes} m-2 p-4 text-center">
  <uke-chord img frets={frets[name]} name={name}></uke-chord>
</span>