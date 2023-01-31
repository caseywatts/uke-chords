<script>
  import UkeChordWrapper from '../uke-chord-wrapper.svelte';
  import { createParamsArrayStore } from "../lib/URLSearchParamsStore"

  const chords = createParamsArrayStore("chords");
</script>

<div class="grid grid-cols-9 text-center justify-items-center">
  {#each $chords as chord}
    <UkeChordWrapper name={chord} />
  {/each}
</div>