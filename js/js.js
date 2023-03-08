document.getElementById('btnInfo').addEventListener('click', function() {
     document.getElementById('btnInfo').style.color = 'red';
     document.getElementById('btnExperiencia').style.color = '#f8f9faa6';
     document.getElementById('btnHabilidades').style.color = '#f8f9faa6';
});

document.getElementById('btnHabilidades').addEventListener('click', function() {
    document.getElementById('btnHabilidades').style.color = 'red';
    document.getElementById('btnExperiencia').style.color = '#f8f9faa6';
    document.getElementById('btnInfo').style.color = '#f8f9faa6';
});

document.getElementById('btnExperiencia').addEventListener('click', function() {
    document.getElementById('btnExperiencia').style.color = 'red';
    document.getElementById('btnInfo').style.color = '#f8f9faa6';
    document.getElementById('btnHabilidades').style.color = '#f8f9faa6';
});