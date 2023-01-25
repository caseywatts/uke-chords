<script>
  import CircleOfFifths from "../components/+circle-of-fifths.svelte";
  import JustTheHighlights from "../components/+just-the-highlights.svelte"
  import {createQueryStore} from "../lib/URLSearchParamsStore"

  const title = createQueryStore("title");
</script>



<h1 class="text-center text-2xl p-3">Uke Chords (Accordion Layout) <span class="pl-4 text-lg">by <a class="text-blue-500 underline" href="https://social.coop/@heycaseywattsup">@heycaseywattsup</a></span></h1>
{#if title}
  <h2 class="text-center text-4xl p-3">{$title}</h2>

{/if}
<!-- <JustTheHighlights /> -->
<CircleOfFifths />