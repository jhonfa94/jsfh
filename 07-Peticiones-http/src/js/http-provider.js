

const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

//Cloudinary
const cloudPreset = 'ytouocsg'
const cloudUrl = 'https://api.cloudinary.com/v1_1/dwvjxubzh/upload';

// PRIMERA FORMA
/* fetch(jokeUrl).then(resp => {
     console.log(resp);
    resp.json().then(data =>{
         console.log(data);
        console.log(data.id);
        console.log(data.value);
        
    });
    
}); */

//SEGUNDA FORMA
/* fetch(jokeUrl)
  .then(resp => resp.json())
  .then(({ id, value }) => {
    console.log(id, "\n", value);
}); */

const obtenerChiste = async()=>{

    try {
        const resp = await fetch(jokeUrl);

        //El ok viene en el resultado de la petición
        if(!resp.ok)  throw 'NO se puedo realizar la petición';

        const {icon_url, id, value} = await resp.json();     

        return {icon_url, id, value};
        
    } catch (err) {

        throw err;
        
    }    
}

const obtenerUsuarios = async()=>{

    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();

    return usuarios;  

}

//ArchivoSubir :: File
const subirImagen = async(archivoSubir) =>{

    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        } );

        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;       
            
        } else {
            throw await resp.json();            
        }

    } catch (error) {
        throw error;
    }


}



export{
    obtenerChiste,
    obtenerUsuarios, 
    subirImagen
}
