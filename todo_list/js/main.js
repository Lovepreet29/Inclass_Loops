// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function (evt){
    let checks = document.querySelectorAll('[name=message]');
    let idx = 0;
    while (idx < checks.length) {
    if (evt.target.checked) {
    checks[idx].checked = true;
    } else {
    checks[idx].checked = false;
    }
    idx = idx + 1;
    }
});