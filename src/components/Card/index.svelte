<script>
import CardImg from './CardImg/CardImg.svelte'
import CardText from './CardText/CardText.svelte'
</script>

<div class="card">
  <CardImg />
  <CardText />
</div>

<style type="text/scss" lang="scss">
.card {
  display: block;
  margin: 0 auto;
  background: #eee;
}
</style>
