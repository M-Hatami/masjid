
function vaght() {
    const dateTime = document.getElementById('dateTime');
    const dTOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long'
    };
    date = new Date(Date.now());
    dateTime.innerHTML = "<li><strong>انشاءالله در روز : &nbsp;</strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        weekday: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + ' ' + new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + "&nbsp;&nbsp;&nbsp;<strong> سلسله برنامه مباحث جهاد با نفس </strong></li>" + "<li><strong> در روز: &nbsp;</strong>" + new Intl.DateTimeFormat('fa-IR-u-ca-islamic-nu-arabext', {
        year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h12',
        dayPeriod: 'long', timeZone: 'Asia/Tehran'
    }).format(date) + "&nbsp;&nbsp;&nbsp;<strong> درس شرح دعای کمیل </strong></li>";

    // call this function again in 1000ms, so the time is updated
    setTimeout(vaght, 1000);
}
window.addEventListener('load', vaght)
