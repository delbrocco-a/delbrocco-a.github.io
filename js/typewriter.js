const text = 
  "Alexander is a penultimate-year Computer Science student pursuing an " +
  "integrated masters at the University of Leeds. Alongside his studies, " +
  "he's engaged in benchmarking QML algorithms as part of his dissertation, " +
  "and undergoing military leadership training at his local UOTC unit. " +
  "Outside of campus, when he's not buried in some book, he's out on a " +
  "hike or at some cosy pub, deep in conversation amongst his friends.";

const prompt = document.getElementById('prompt');
prompt.textContent = getTime();
const output = document.getElementById('output');
const cursor = document.createElement('span');
cursor.className = 'cursor';

let index = 0;

function type() {
  if (index < text.length) {
    output.textContent = text.slice(0, ++index);
    output.appendChild(cursor);
    setTimeout(type, 18);
  }
}

function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `|${hours}:${minutes}-[AVALON:/~/index.html]$ cat about.txt`;
}

output.appendChild(cursor);
setTimeout(type, 400);