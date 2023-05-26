input_color = document.querySelector("#body_color")
body = document.querySelector("body")

input_color.addEventListener("input", () => {
   value = input_color.value;

   body.style.background = value;
   console.log(body);
})

console.log(input_color);
