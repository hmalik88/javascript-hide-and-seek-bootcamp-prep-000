function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const uls = document.querySelectorAll('ul.ranked-list');
 for (let i = 0; i < uls.length; i ++) {
  children = uls[i].children
  for (let f = 0; f < children.length; f++) {
    children[f].innerHTML = parseInt(children[f].innerHTML) + n;
  }
 }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
