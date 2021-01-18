<template>
  <div id="root">
    <div class="title">Attributes</div>
    <div>
      <table>
        <tr>
            <td>STR</td>
            <td><input type="text" value="Current"></td>
            <td><input type="text" value="Cap"></td>
        </tr>
        <tr>
            <td>DEX</td>
            <td><input type="text" value="Current"></td>
            <td><input type="text" value="Cap"></td>
        </tr>
        <tr>
            <td>INT</td>
            <td><input type="text" value="Current"></td>
            <td><input type="text" value="Cap"></td>
        </tr>
        <tr>
            <td>SPR</td>
            <td><input type="text" value="Current"></td>
            <td><input type="text" value="Cap"></td>
        </tr>
        <tr>
            <td>CON</td>
            <td><input type="text" value="Current"></td>
            <td><input type="text" value="Cap"></td>
        </tr>
    </table>
    </div>
  </div>

</template>


<script>
export default {
  name: "CharacterPlannerAttributes",
  data() {},
};
</script>

<style scoped>
#root {
    background-color: saddlebrown;
    color: white;
    max-width: 11em;
}
.title {
  background-color: chocolate;
}
input {
  background-color: crimson;
  max-width: 4em;
}
</style> 