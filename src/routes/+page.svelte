<script>
  import CircleOfFifths from "../components/+circle-of-fifths.svelte";
  import JustTheHighlights from "../components/+just-the-highlights.svelte"
  import createParamsStringStore from "../lib/URLSearchParamsStringStore"
  import createParamsBooleanStore from "../lib/URLSearchParamsBooleanStore"

  const title = createParamsStringStore("title");
  const order = createParamsBooleanStore("order");
  const chords = createParamsStringStore("chords");
</script>



<h1 class="text-center text-2xl p-3">Uke Chords (Accordion Layout) <span class="pl-4 text-lg">by <a class="text-blue-500 underline" href="https://social.coop/@heycaseywattsup">@heycaseywattsup</a></span></h1>
{#if title}
  <h2 class="text-center text-4xl p-3">{$title}</h2>
  <label>
    Title
    <input bind:value={$title}>
  </label>
  <label>
    Show Chord Order
    <input type=checkbox bind:checked={$order}>
  </label>
  <label>
    Chords
    <input bind:value={$chords}>
  </label>
{/if}
<!-- <JustTheHighlights /> -->
<CircleOfFifths />