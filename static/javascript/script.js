let file
let dateFormatBr
let fileSize

function uploadFile() {

    let file = document.getElementById('input-select-file').files[0];
    let dateFormatBr = new Intl.DateTimeFormat('pt-BR').format(file.lastModifiedDate);
    let fileSize = (file.size / 1048576).toFixed(2) + ' MB';

    if (file !== '' && file.size < 5242880 ) {

        $('#file-details').addClass('text-start')

        $('#file-details').html('')
        $('#file-details').append('<div><p class="fs-6">Nome: '+file.name+'</p></div>')
        $('#file-details').append('<div><p class="fs-6">Última modificação: '+dateFormatBr+'</p></div>')
        $('#file-details').append('<div><p class="fs-6">Tamanho: '+fileSize+'</p></div>')

        $('#box-up-file').removeClass('border-light-subtle border-danger')
        $('#box-up-file').addClass('border-success')

    } else {

        $('#file-details').removeClass('text-start')

        $('#file-details').html('')
        $('#file-details').append('<p class="fs-6 text-danger"><em>Arquivo com tamanho acima do permitido</em></p>')

        $('#box-up-file').removeClass('border-light-subtle border-success')
        $('#box-up-file').addClass('border-danger')

    }
}
