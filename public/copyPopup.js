import $ from 'jquery';

let popupTimer;

function delayPopup(popup) {
    popupTimer = setTimeout(function () { $(popup).popup('hide') }, 4200);
}

// $(document).ready(function () {
//
// });

document.attachPopup  = () => {
    $('.copyToken').click(function () {
        console.log('alma')
        clearTimeout(popupTimer);

        const $input = $(this).closest('div').find('.copyInput');

        /* Select the text field */
        $input.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        $(this)
            .popup({
                title: 'Sikeres vágólapra másolás!',
                content: 'Küldd el ezt a kódot a másik játékosnak, hogy ő is be tudjon csatlakozni',
                on: 'manual',
                exclusive: true
            })
            .popup('show')
        ;

        // Hide popup after 5 seconds
        delayPopup(this);

    });
}


