<script>
  import UkeChordWrapper from '../uke-chord-wrapper.svelte';
  import { createParamsArrayStore } from "../lib/URLSearchParamsStore"

  const chords = createParamsArrayStore("chords");
</script>

<div class="text-center justify-items-center p-4">
  {#each $chords as chord}
    <UkeChordWrapper name={chord} highlight="panel" />
  {/each}
</div>