<script>
  import CircleOfFifths from "../components/+circle-of-fifths.svelte";
  import JustTheHighlights from "../components/+just-the-highlights.svelte"
  import { createParamsStringStore, createParamsBooleanStore, createParamsArrayStore } from "../lib/URLSearchParamsStore"

  const title = createParamsStringStore("title");
  const order = createParamsBooleanStore("order");
  const chords = createParamsArrayStore("chords");
  const layout = createParamsStringStore("layout");

  let editing = false;
</script>



<h1 class="text-center text-2xl p-3">Uke Chords (Accordion Layout) <span class="pl-4 text-lg">by <a class="text-blue-500 underline" href="https://social.coop/@heycaseywattsup">@heycaseywattsup</a></span></h1>
{#if $title}
  <h2 class="text-center text-4xl p-3">{$title}</h2>
{/if}
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

{#if $layout == "chords-used"}
  <JustTheHighlights />
{/if}
{#if $layout == "circle-of-fifths" }
  <CircleOfFifths />
{/if }