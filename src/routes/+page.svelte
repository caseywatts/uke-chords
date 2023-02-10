<script>
  import CircleOfFifths from "../components/+circle-of-fifths.svelte";
  import JustTheHighlights from "../components/+just-the-highlights.svelte"
  import Accordion from "../components/+accordion.svelte"
  import { createParamsStringStore, createParamsBooleanStore, createParamsArrayStore } from "../lib/URLSearchParamsStore"

  const title = createParamsStringStore("title");
  const artist = createParamsStringStore("artist");
  const order = createParamsBooleanStore("order");
  const chords = createParamsArrayStore("chords");
  const layout = createParamsStringStore("layout");

  let editing = false;
</script>


{#if $title}
  <h2 class="text-center text-4xl p-3 mt-2">
    {$title}
    <div class="text-2xl">{$artist}</div>
  </h2>
{/if}
<div class="text-center">
  {#if editing}
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
      <select multiple bind:value={$chords} style="width: 100px;">
        <option value="F">F</option>
        <option value="C">C</option>
        <option value="G">G</option>
        <option value="D">D</option>
        <option value="A">A</option>
      </select>
    </label>
  {/if}

  {#if $layout == "accordion"}
    <Accordion />
  {:else if $layout == "fifths"}
    <CircleOfFifths />
  {:else}
    <JustTheHighlights />  
  {/if}
</div>