const text = 
  "Alexander is an industrial-year Computer Science student pursuing an " + 
  "integrated masters at the University of Leeds. Currently on placement at " +
  "DWP Digital, he works across cloud applications, infrastructure, " + 
  "internal platforms and automated workflows, building systems used at " + 
  "scale across the UK's largest government department. Alongside this, he " +
  "has conducted research into benchmarking quantum machine learning " +
  "algorithms for medical diagnostics, completed 3 years of under-officer " +
  "military leadership training in the YOTR (UOTC), and an active student " +
  "society member and course representative. ";

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