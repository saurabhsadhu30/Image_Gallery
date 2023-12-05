const input = document.querySelector("#input");
const submit= document.querySelector("#submit");
const imgContaine = document.querySelector("image-container");

submit.addEventListener('click', async function(){
  const count = input.value;
  console.log(count)
  if(count<1 || count>100){
    alert("please enter the number between");
  }else{
    // const url = `https://picsum.photos/200/300/?random/${count}`;
    // const img=document.createElement('img');
    for(let i=0;i<count;i++){
      const img=document.createElement('img');
      img.src=`https://picsum.photos/200/300/?random/${i}`;
      document.body.appendChild(img);
    }
   

  }
});