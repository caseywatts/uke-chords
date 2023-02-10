<script>
  import UkeChordWrapper from '../uke-chord-wrapper.svelte';
  import { createParamsArrayStore } from "../lib/URLSearchParamsStore"
  import Verse from "./+verse.svelte";
  import Chorus from "./+chorus.svelte";
  import Bridge from "./+bridge.svelte";

  const chorus = createParamsArrayStore("chorus");
  const verse = createParamsArrayStore("verse");
  const bridge = createParamsArrayStore("bridge");
  const structure = createParamsArrayStore("structure");
</script>

<div class="text-center justify-items-center p-4">
  {#each $structure as part}
    {#if part == "c"}
      <Chorus chords={$chorus} />
    {/if}
    {#if part == "v"}
      <Verse chords={$verse} />
    {/if}
    {#if part == "b"}
      <Bridge chords={$bridge} />
    {/if}
  {:else}
    <Verse chords={$verse} />
    <Chorus chords={$chorus} />
    <Bridge chords={$bridge} />
  {/each}
</div>