const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
  <tr>
    <th>KEY NAME</th>
    <th>KEY CODE</th>
    <th>CODE</th>
  </tr>

  <tr>

    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
 </tr>
</table>
    
    </div>
    `;
});