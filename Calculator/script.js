let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = string.replace(/x/g, '*').replace(/÷/g, '/');
        string = eval(string);
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error";
      }
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML === '+/-') {
      if (string !== "" && !isNaN(string)) {
        string = String(-parseFloat(string));
      }
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
