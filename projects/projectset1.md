# project related to dom
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-juhtkw?file=4-GuessTheNumber%2Findex.html)

#  solution code

## project 1
```
console.log("ankit")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```