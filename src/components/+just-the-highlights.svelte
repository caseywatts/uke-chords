<script>
  import UkeChordWrapper from '../uke-chord-wrapper.svelte';
  import { createParamsArrayStore } from "../lib/URLSearchParamsStore"

  const chorus = createParamsArrayStore("chorus");
  const verse = createParamsArrayStore("verse");
  const bridge = createParamsArrayStore("bridge");
</script>

<div class="text-center justify-items-center p-4">
  {#if $chorus.length > 0}
    <div>
      <div>Chorus</div>
      {#each $chorus as chord}
        <UkeChordWrapper name={chord} highlight="panel" />
      {/each}
    </div>
  {/if}
  {#if $verse.length > 0}
    <div>
      <div>Verse</div>
      {#each $verse as chord}
        <UkeChordWrapper name={chord} highlight="panel" />
      {/each}
    </div>
  {/if}
  {#if $bridge.length > 0}
  <div>
    <div>Bridge</div>
    {#each $bridge as chord}
      <UkeChordWrapper name={chord} highlight="panel" />
    {/each}
  </div>
  {/if}
</div>