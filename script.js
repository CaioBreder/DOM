const main = document.querySelector('main');

  const joke1="What do you call an ant who fights crime? A vigilANTe!"
  const joke2="How does the ocean say hi? It waves!"
  const joke3="What's Thanos favorite app on his phone? Snapchat."

const template = `
   <section>
      <h2>My Jokes</h2>
      <p> <li>${joke1}</li> <li>${joke2}</li> <li>${joke3}</li></p>
   </section>
`


main.innerHTML = template
const p = document.createElement('p');
p.textContent = "That's all folks!";
document.body.appendChild(p);