let star = prompt('Enter your Number');
let view = '';
for (let i = 0; i <= star / 2 - 1; i++) {
  for (let j = 0; j <= i; j++) {
    view = view + '*';
  }

  view = view + '<br>';
}
for (let i = star / 2 - 1; i >= 0; i--) {
  for (let j = i; j >= 0; j--) {
    view = view + '*';
  }

  view = view + '<br>';
}
document.write(view);

let text = document.createElement('p');
let;
