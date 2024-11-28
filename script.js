function openModal() {
    document.getElementById('modal').classList.add('active'); 
    document.getElementById('overlay').classList.add('active'); 
}

function closeModal() {
    document.getElementById('modal-vuelve').classList.remove('active'); 
    document.getElementById('overlay').classList.remove('active'); 
}

function openModalOtraVez() {
    document.getElementById('modal-vuelve').classList.add('active');
    decument.getElementById('overlay').classList.remove('active');
}
