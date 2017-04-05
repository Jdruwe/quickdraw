var can2 = new handwriting.Canvas(document.getElementById("can2"), 10);
let items = ["yoga", "bird", "pencil"];

can2.setCallBack(function(data, err) {
  if (err) {
    throw err;
  }
  console.log(data);
  let topthree = data.slice(0, 3);
  if (data) {
    items = items.concat(data);
  }
  if (!!~topthree.indexOf(window.chosenItem)) {
    // let list = topthree.map(function(b) {
    //   return `<li>${b.trim()}</li>`;
    // });
    // list.push("<li>You got it!</li>");
    html = `<span>You got it! Hit Restart for a New one!</span>`;
    document.getElementById("result2").innerHTML = html;
  } else {
    html = `<div>Cold</div>`;
    document.getElementById("result2").innerHTML = html;
  }
});
can2.set_Undo_Redo(true, true);

function clearResults() {
  document.getElementById("result2").innerHTML = "";
}
function main() {
  function chooseItem(arr) {
    let index = Math.floor(Math.random() * 100) % arr.length;
    return arr[index];
  }

  const chosen = (window.chosenItem = chooseItem(items));
  console.log(chosen);
  document.getElementById("guess").innerHTML = chosen;
  can2.erase();
  clearResults();
}
main();
