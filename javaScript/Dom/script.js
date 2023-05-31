function convert()
      {
        const root = Number(document.getElementById("input").value)
        const value = root*root;
        const result = document.getElementById("result")
        result.innerHTML ="The Square of "+root+" is" +value;
      }