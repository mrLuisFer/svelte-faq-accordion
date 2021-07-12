<script>
import DynamicClickTitle from '../DynamicClickTitle.svelte'
import CardImg from './CardImg/CardImg.svelte'
import CardText from './CardText/CardText.svelte'
</script>

<div class="card">
  <DynamicClickTitle defaultTitle="FAQs Card" newTitle="By mrLuisFer" />
  <CardImg />
  <CardText />
</div>

<style type="text/scss" lang="scss">
.card {
  display: block;
  margin: 0 auto;
  background: #eee;
  border-radius: 10px;
  padding: 1rem;
}
</style>
