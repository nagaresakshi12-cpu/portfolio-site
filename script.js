document.getElementById('cp').addEventListener('click',function(){
  var b=this,t='nagaresakshi12@gmail.com';
  function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)}
  try{navigator.clipboard.writeText(t).then(done,function(){})}catch(e){}
});
