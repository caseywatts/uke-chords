<script>
	import UkeChordWrapper from '../uke-chord-wrapper.svelte';
  import { onMount } from "svelte";

  let title = "";
  
  onMount(() => {
    let searchParams = new URLSearchParams(window.location.search);
    title = searchParams.getAll("title")[0];
  });
</script>



<h1 class="text-center text-2xl p-3">Uke Chords (Accordion Layout) <span class="pl-4 text-lg">by <a class="text-blue-500 underline" href="https://social.coop/@heycaseywattsup">@heycaseywattsup</a></span></h1>
{#if title}
  <h2 class="text-center text-4xl p-3">{title}</h2>
{/if}
<div class="grid grid-cols-9 text-center justify-items-center">
  <UkeChordWrapper name="Eb"/>
  <UkeChordWrapper name="Bb"/>
  <UkeChordWrapper name="F"/>
  <UkeChordWrapper name="C"/>
  <UkeChordWrapper name="G"/>
  <UkeChordWrapper name="D"/>
  <UkeChordWrapper name="A"/>
  <UkeChordWrapper name="E"/>
  <UkeChordWrapper name="B"/>

  <UkeChordWrapper name="Ebm"/>
  <UkeChordWrapper name="Bbm"/>
  <UkeChordWrapper name="Fm"/>
  <UkeChordWrapper name="Cm"/>
  <UkeChordWrapper name="Gm"/>
  <UkeChordWrapper name="Dm"/>
  <UkeChordWrapper name="Am"/>
  <UkeChordWrapper name="Em"/>
  <UkeChordWrapper name="Bm"/>

  <UkeChordWrapper name="Eb7"/>
  <UkeChordWrapper name="Bb7"/>
  <UkeChordWrapper name="F7"/>
  <UkeChordWrapper name="C7"/>
  <UkeChordWrapper name="G7"/>
  <UkeChordWrapper name="D7"/>
  <UkeChordWrapper name="A7"/>
  <UkeChordWrapper name="E7"/>
  <UkeChordWrapper name="B7"/>
</div>