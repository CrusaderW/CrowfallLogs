<template>
  <div id="root">
    <nav>
      <div class="logo"><img src="..\assets\dummy-crest.png" /></div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Tools</a></li>
        <li><a href="https://crusaderw.com" target="_blank">Guides</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Privacy</a></li>
        <li><button>Sign Up</button></li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      title: "Navigation Bar",
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
}
nav ul {
  display: flex;
  background-color: grey;
  list-style-type: none;
}
nav li {
  background-color: white;
}
nav a {
  display: inline-block;
  padding: 0.5em;
  margin: 0.2em;
  color: var(--clr-primary);
  text-decoration: none;
}
nav a:hover {
  color: grey;
}
nav img {
  width: 3em;
  height: 3em;
}
.logo {
  display: block;
  justify-content: flex-start;
  background-color: hotpink;
}
nav button {
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 10%;
}
</style> 