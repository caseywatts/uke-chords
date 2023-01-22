<script>
  export let name = "";
  import frets from "./uke-chords.json";
</script>

<span class="bg-slate-200 m-2 p-4 text-center">
  <uke-chord img frets={frets[name]} name={name}></uke-chord>
</span>