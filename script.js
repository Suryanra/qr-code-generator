addEventListener('keypress',(e)=>
{ 
      if(e.key=="Enter")
            {generateqr();}
});

function generateqr() {
      const data = document.getElementById('qrtext').value;
      const img = document.getElementById('qrimage');
      if(!data)
      {
            // alert(" field empty ");
            document.getElementById('qrtext').classList.add('error');
            setTimeout(() => {
                  document.getElementById('qrtext').classList.remove('error');
            }, 1000);
            
      }

      else 

      {     
            document.getElementById("imgdivid").innerHTML="";
            const imgtag=document.createElement("img");
            imgtag.classList.add('img');
            imgtag.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
            document.getElementById("imgdivid").appendChild(imgtag)
            imgtag.addEventListener('load', () => {
                  imgtag.classList.add('loaded'); // Add the 'loaded' class after the image is loaded
            });
      }
      }