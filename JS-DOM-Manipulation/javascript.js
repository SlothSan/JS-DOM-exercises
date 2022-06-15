const container = document.querySelector(`#container`);

const content = document.createElement(`div`);
content.classList.add(`content`);
content.textContent = `This is the glorious text content!`;

const pRed = document.createElement(`p`);
pRed.classList.add(`p`);
pRed.textContent = `Hey I'm Red!`;
pRed.style.color = `red`;

const h3 = document.createElement(`h3`);
h3.classList.add(`h3`);
h3.textContent = `I'm A Blue H3!`;
h3.style.color = `blue`;

const contentTwo = document.createElement(`div`);
contentTwo.classList.add(`contentTwo`);
contentTwo.style.cssText = `border: 1px black solid; background: pink;`;

const h1 = document.createElement(`h1`);
h1.classList.add(`h1`);
h1.textContent = `I'm In A Div!`

const p = document.createElement(`p`);
p.classList.add(`p`);
p.textContent = `ME TOO!`;


container.appendChild(content);
container.appendChild(pRed);
container.appendChild(h3);

contentTwo.appendChild(h1);
contentTwo.appendChild(p);
container.appendChild(contentTwo);

