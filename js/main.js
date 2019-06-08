var mpw, error;

function updateMPW() {
    mpw = null;
    startWork();
    mpw = new MPW( $('#mp-username')[0].value, $('#mp-password')[0].value, 3 );
    mpw.key.then(
        function() {
            doneWork();
        },
        function(reason) {
            error = reason;
            mpw = null;
            doneWork();
        }
    );
}
function startWork() {
    update(true);
}
function doneWork() {
    update(false);
}
function update(working) {
    var screen = mpw? 'site': 'identity';

    // Screen Name
    if (screen == 'identity') {
        $('#identity').addClass('active');
        $('#identity').removeClass('d-none');

        if (!working)
            $('#userName').focus();
    }
    else {
        $('#identity').removeClass('active');
        $('#identity').addClass('d-none');
        $('#mp-username')[0].value = $('#mp-password')[0].value = '';
    }

    if (screen == 'site') {
        $('#site').addClass('active');
        $('#site').removeClass('d-none');

        if (!working)
            $('#mp-siteName').focus();
    }
    else {
        $('#site').removeClass('active');
        $('#site').addClass('d-none');
        $('#mp-siteName').val(null);
        $('#mp-sitePassword').text(null);
    }

    // Working
    if (working && screen == 'identity')
        $('#mp-spinner').removeClass('d-none');
    else
        $('#mp-spinner').addClass('d-none');

    if (working && screen == 'site')
        $('#site').addClass('working');
    else
        $('#site').removeClass('working');

    // Error
    $('#error').text(error);
}
function updateSite() {
    if (!mpw) {
        doneWork();
        return
    }

    startWork();
    mpw.generatePassword( $('#mp-siteName')[0].value, $('#mp-siteCounter')[0].valueAsNumber, 'long' )
       .then( function (sitePassword) {
           $('#mp-sitePassword').text(sitePassword);
           doneWork();
       }, function (reason) {
           error = reason;
           doneWork();
       });
}
function selectText(element) {
    var doc = document, range, selection;    

    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}


$(function() {
    $('#identity form').on('submit', function() {
        updateMPW();
        return false;
    });
    $('#site input, #site select').on('change input keyup', function() {
        updateSite();
    });
    $('#mp-logout').on('click', function() {
        mpw = null;
        doneWork();
    });
    $('#mp-sitePassword').on('click', function() {
        selectText(this);
    });

    doneWork();
});
