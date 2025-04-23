<script lang="ts">
  import "../app.css";
  let { children } = $props();
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import { ArrowLeft, Paperclip, Calendar, CircleUser } from "lucide-svelte";
  import Lightswitch from "/Users/fraserbrown/Documents/Kangan/Web_Dev/Repos/to-do-app-skeletonUI/src/lib/components/Lightswitch.svelte";
</script>

<AppBar>
  {#snippet lead()}
    <ArrowLeft size={24} />
  {/snippet}
  {#snippet trail()}
    <Paperclip size={20} />
    <Calendar size={20} />
    <CircleUser size={20} />
  {/snippet}
  {#snippet headline()}
    <h2 class="h2">Headline</h2>
  {/snippet}
  <Lightswitch />
</AppBar>

{@render children()}
