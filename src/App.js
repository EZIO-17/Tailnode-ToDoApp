// import logo from './logo.svg';
import './App.css';

function App() {

  function enterTask(event){
      if (event.key === 'Enter') {
        addList(event);
      }
  }

  function addList(_e) {
      var input = document.querySelector("input");
      var notcomp = document.querySelector(".notcomp");
      var comp = document.querySelector(".comp");

      var newli = document.createElement("li");
      var checkBtn = document.createElement("button");
      var delBtn = document.createElement("button");
      console.log("4" , checkBtn)
      checkBtn.innerHTML = `Done`;
      delBtn.innerHTML = `<button>Remove</button>`;
      console.log("1222",input)
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
          <input id='taskInput' type="text" placeholder="Add a Task" onKeyDown={enterTask}/>
          <button onClick={addList}>Add</button>
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
