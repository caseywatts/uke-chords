<script>
  export let chords;
  import UkeChordWrapper from '../uke-chord-wrapper.svelte';
</script>

{#if chords.length > 0}
<div>
  <div>Verse</div>
  {#each chords as chord}
    <UkeChordWrapper name={chord} highlight="panel" />
  {/each}
</div>
{/if}
