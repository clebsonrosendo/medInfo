function uploadFile() {
    let file = $('#input-select-file').val();
    if (file === undefined) {
        $('#file-details').html(
            "<p><em>Nenhum arquivo selecionado</em></p>")
    } else {
        console.log(file.files.length)
    }
}

function uploadFileDetails() {

}


//                        <p class="fs-6 text-secondary"><em>Nenhum arquivo selecionado</em></p>
//                        <div><p class="fs-bold">Nome:</p></div>
//                        <div></div>
//                    </div>
//                    <div>
//                        <div><p class="fs-bold">Tamanho:</p></div>
//                        <div></div>
//                    </div>
//                    <div>
//                        <div><p class="fs-bold">Último modificação:</p></div>
//                        <div></div>