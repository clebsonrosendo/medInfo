let file
let dateFormatBr
let fileSize
let fileType


function dropHandler(ev) {
  // Evitar comportamento padrão do navegador
  ev.preventDefault();

  let dropFile = ev.dataTransfer.files
  uploadFileDrop(dropFile[0])

}


function dragOverHandler(ev) {
   // Evitar comportamento padrão do navegador
  ev.preventDefault();
}


function uploadFile() {
    // Quando o input é acionado
    let file = document.getElementById('input-select-file').files[0];
    detailsFile(file)

}


function uploadFileDrop(dropFile) {
    // Quando o drop é acionado
    let file = dropFile
    detailsFile(file)

}


function detailsFile(file) {

    let dateFormatBr = new Intl.DateTimeFormat('pt-BR').format(file.lastModifiedDate);
    let fileSize = (file.size / 1048576).toFixed(2) + ' MB';
    let fileType = file.type;


    if (file !== '' && file.size < 5242880 && file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {

        $('#file-details').addClass('text-start')

        $('#file-details').html('')
        $('#file-details').append('<div><p class="fs-6"><b>Nome:</b> '+file.name+'</p></div>')
        $('#file-details').append('<div><p class="fs-6"><b>Última modificação:</b> '+dateFormatBr+'</p></div>')
        $('#file-details').append('<div><p class="fs-6"><b>Tamanho:</b> '+fileSize+'</p></div>')

        $('#box-up-file').removeClass('border-light-subtle border-danger')
        $('#box-up-file').addClass('border-success')

        $('#btn-submit').removeClass('d-none')


    } else {

        $('#file-details').removeClass('text-start')

        $('#file-details').html('')
        $('#file-details').append('<p class="fs-6 text-danger"><em>Arquivo com tamanho acima do permitido ou em formato incompatível</em></p>')

        $('#box-up-file').removeClass('border-light-subtle border-success')
        $('#box-up-file').addClass('border-danger')

        $('#btn-submit').addClass('d-none')

    }
}


