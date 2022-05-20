const especialistaCtrl={}

especialistaCtrl.obtenerEspecialistas = async()=>{
    try {
        const especialistas = await especialistaCtrl.find();
        return especialistas;
    } catch (error) {
        console.log(error);
    }
}
