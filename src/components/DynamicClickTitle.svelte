<script>
export let defaultTitle
export let newTitle = ''

let isNewTitle = false

const changeTitleValue = () => {
  isNewTitle = !isNewTitle
}
</script>

<h1 class="title" on:click="{changeTitleValue}">
  {isNewTitle ? newTitle : defaultTitle}
</h1>

<style type="text/scss" lang="scss" scoped>
.title {
  font-size: 1.3rem;
  text-align: center;
  font-weight: 600;
  margin: 0;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 500px) {
    text-align: left;
    display: inline-block;
  }
}
</style>
