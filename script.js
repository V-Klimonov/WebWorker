let worker = new Worker("./worker.js");
function calculate() {
  const num = document.getElementById("inputNumber").value;
  const result = document.getElementById("result");
  if (result.innerHTML === "Calculating...") {
    worker.terminate();
    worker = new Worker("./worker.js");
  }
  
  worker.onmessage = (message) => {
      result.innerHTML = `Result: ${message.data}`;
    };
    result.innerHTML = "Calculating...";
    worker.postMessage({ data: num });
}
