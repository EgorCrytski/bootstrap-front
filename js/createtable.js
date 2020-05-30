//http://www.cyberforum.ru/javascript-beginners/thread2435235.html
let data = {
    caption: "data",
    headers: ["header1", "header2", "header3"],
    data: [
        ["data11", "data2", "data3"],
        ["data21", "data22", "data23"]
    ]
}
document.body.insertAdjacentHTML(
  `beforeEnd`,
  `<table>
    <thead>
      <tr>${data.headers.map(h => `<th>${h}</th>`).join``}</tr>
    </thead>
    <tbody>
      ${data.data.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join``}</tr>`).join``}
    </tbody>
   </table>`
);