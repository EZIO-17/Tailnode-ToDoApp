// import logo from './logo.svg';
import './App.css';

function App() {

  var input = document.querySelector("input");
  var btn = document.querySelector(".addTask > button");

  btn.addEventListener("click", addList);

  // // input.addEventListener("keyup", (e) => {
  // //     e.keyCode === 13 ? addList(e) : null;
  // // });

  function addList(e) {
      var notcomp = document.querySelector(".notcomp");
      var comp = document.querySelector(".comp");

      var newli = document.createElement("li");
      var checkBtn = document.createElement("button");
      var delBtn = document.createElement("button");

      checkBtn.innerHTML = `<i class="fas fa-check-circle"></i>`;
      delBtn.innerHTML = `<i class="fas fa-trash"></i>`;

      if (input.value !== "") {
          newli.textContent = input.value;
          input.value = "";
          notcomp.appendChild(newli);
          newli.appendChild(checkBtn);
          newli.appendChild(delBtn);
      }

      checkBtn.addEventListener("click", function() {
          var parent = this.parentNode;
          parent.remove();
          comp.appendChild(parent);
          checkBtn.style.display = "none";
      });
      delBtn.addEventListener("click", function() {
          var parent = this.parentNode;
          parent.remove();
      });
  }

  return (
    <div className="cont">
      <div className="addTask">
          <input type="text" placeholder="Add a Task" />
          <button>Add</button>
      </div>
      <ol className="notcomp">
          <h3>Task Not Completed</h3>
      </ol>
      <ol className="comp">
          <h3>Task Completed</h3>
      </ol>
    </div>
  );
}

export default App;
